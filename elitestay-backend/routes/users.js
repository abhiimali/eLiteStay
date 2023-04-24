const express = require('express')


const router = express.Router()

router.get("/" , (req,res) => {
    let message = " User Not Found "
    res.json({message :  message , error : "None "})
})


module.exports = router ;