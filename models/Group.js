const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('./../Utils')

const groupSchema = new mongoose.Schema({
    interest: {
        type: String,
    },
    member: {
        type: String,
    }
}, { timestamps: true })

// model
const groupModel = mongoose.model('Group', groupSchema)

// export
module.exports = groupModel