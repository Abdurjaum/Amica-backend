const express = require('express')
const router = express.Router()
const Utils = require('./../Utils')
const Interest = require('../models/Interest')

// GET- get all interests ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Interest.find().populate('user', '_id firstName lastName')
    .then(interests => {
      if(interests == null){
        return res.status(404).json({
          message: "No interest group found"
        })
      }
      res.json(interests)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Problem getting interest groups"
      })
    })  
})

// export
module.exports = router