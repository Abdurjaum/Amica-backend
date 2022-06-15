const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../Utils')

// schema
const interestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String    
  },
  price: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  image: {
    type: String,
    required: true    
  },
  gender: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  }
  
}, { timestamps: true })

// model
const interestModel = mongoose.model('Interest', interestSchema)

// export
module.exports = interestModel