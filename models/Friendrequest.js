const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Utils = require('../Utils')

// schema
const friendrequestSchema = new mongoose.Schema({

senderId: {
    type: String,
    require: true
},
receiverId: {
    type: String,
    require: true
}
  
}, { timestamps: true })

// model
const friendrequestModel = mongoose.model('Friendrequest', friendrequestSchema)

// export
module.exports = friendrequestModel