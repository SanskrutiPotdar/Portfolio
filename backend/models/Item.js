const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      default: 'Article'
    },
    description: String,
    link: String,

    files: [
      {
        filename: String,
        originalname: String,
        url: String
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Item', itemSchema)