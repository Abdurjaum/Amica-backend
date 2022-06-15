const express = require('express')
const router = express.Router()
const Utils = require('./../Utils')
const Message = require('../models/Message')

// GET- get all messages ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Message.find().populate('user', '_id firstName lastName')
    .then(messages => {
      if(messages == null){
        return res.status(404).json({
          message: "No messages found"
        })
      }
      res.json(messages)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Problem getting messages"
      })
    })  
})

// export
module.exports = router