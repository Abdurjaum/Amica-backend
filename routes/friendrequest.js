const express = require('express')
const router = express.Router()
const Utils = require('./../Utils')
const Friendrequest = require('../models/Friendrequest')

// GET- get all friendrequest ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Friendrequest.find().populate('user', '_id firstName lastName')
    .then(friendrequest => {
      if(friendrequest == null){
        return res.status(404).json({
          message: "No friend requests found"
        })
      }
      res.json(friendrequest)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Problem getting friend requests"
      })
    })  
})

// export
module.exports = router