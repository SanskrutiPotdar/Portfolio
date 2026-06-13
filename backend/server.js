require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const path = require('path')
const multer = require('multer')
const contactRoutes = require('./routes/contactRoutes')
const Item = require('./models/Item')


const fs = require('fs')
const uploadDir = path.join(__dirname, 'uploads')

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173'
  })
)

app.use(express.json())

const itemRoutes = require('./routes/itemRoutes')
app.use('/api/items', itemRoutes)

// Contact form routes
app.use('/api', contactRoutes)

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'))
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, `${unique}-${file.originalname}`)
  }
})

const upload = multer({ storage })

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected')
  })
  .catch(err => {
    console.error('MongoDB Error:', err)
  })  

function auth(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      message: 'No token provided'
    })
  }

  const token = authHeader.split(' ')[1]

  try {
    jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid token'
    })
  }
}

app.post('/api/login', (req, res) => {
  const { email, password } = req.body

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({
      message: 'Invalid email or password'
    })
  }
  
  const token = jwt.sign(
    { role: 'admin' },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d'
    }
  )

  res.json({ token })
})


app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find().sort({
      createdAt: -1
    })

    res.json(items)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
})

app.post('/api/items', auth, upload.array('files'), async (req, res) => {
  console.log('BODY =>', req.body)
  console.log('FILES =>', req.files)

  try {
    const body = req.body || {}

    // attach uploaded files info
    if (req.files && req.files.length > 0) {
      body.files = req.files.map(f => ({
        filename: f.filename,
        originalname: f.originalname,
        url: `/uploads/${f.filename}`
      }))
    }
  
    console.log('FINAL BODY =>', body)
     console.log('FILES =>', JSON.stringify(req.files, null, 2))
    console.log('BODY =>', JSON.stringify(body, null, 2)) 

    const item = await Item.create(body)

    console.log('Saved item:', item)

    res.status(201).json(item)
  } catch (error) {
    console.error(error)

    res.status(400).json({
      message: error.message
    })
  }
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})