const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../Utils')

// schema
const messageSchema = new mongoose.Schema({
    sender: {
        type: String,
        require: true
    },
    receiver: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    dateSent: {
        type: Date,
        require: true
    }
}, { timestamps: true })

// model
const messageModel = mongoose.model('Message', messageSchema)

// export
module.exports = messageModel