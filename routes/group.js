const express = require('express')
const router = express.Router()
const Utils = require('../utils')
const Group = require('../models/Group')

// GET- get all groups ---------------------------
router.get('/', Utils.authenticateToken, (req, res) => {
  Group.find().populate('user', '_id firstName lastName')
    .then(group => {
      if(group == null){
        return res.status(404).json({
          message: "No groups found"
        })
      }
      res.json(group)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        message: "Problem getting groups"
      })
    })  
})

// export
module.exports = router