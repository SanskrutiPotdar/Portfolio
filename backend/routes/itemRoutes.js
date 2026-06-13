const express = require('express')
const router = express.Router()
const Item = require('../models/Item')
const fs = require('fs')
const path = require('path')
const multer = require('multer')

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 })
    res.json(items)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'uploads'))
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, `${unique}-${file.originalname}`)
  }
})

const upload = multer({ storage })

// CREATE item


router.delete('/:id', async (req, res) => {
  console.log('🔥 DELETE ROUTE HIT')
  console.log('ID:', req.params.id)

  try {
    const item = await Item.findById(req.params.id)

    console.log('ITEM FOUND:', item)

    if (!item) {
      return res.status(404).json({
        message: 'Item not found'
      })
    }

    if (item.files?.length) {
      item.files.forEach(file => {
        const filePath = path.join(
          __dirname,
          '..',
          'uploads',
          file.filename
        )

        console.log('Checking:', filePath)

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath)
          console.log('🗑 Deleted:', file.filename)
        }
      })
    }

    await Item.findByIdAndDelete(req.params.id)

    console.log('✅ Deleted from MongoDB')

    res.json({
      message: 'Deleted successfully'
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      message: err.message
    })
  }
})
module.exports = router