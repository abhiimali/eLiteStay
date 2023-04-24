const express = require('express')


const router = express.Router()

router.get("/" , (req,res) => {
    res.json({message : "Auth EndPoint Please Provide Token "})
})


module.exports = router ;