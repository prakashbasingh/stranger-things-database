const express = require("express");
const router = express.Router()
//or 
//const router = require("express").Router()

const Characters = require("./characterModel.js")



router.get("/test", (req, res) => {
    res.send("yes it is working")
})



module.exports = router