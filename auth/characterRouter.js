const express = require("express");
const router = express.Router()
//or 
//const router = require("express").Router()

const Characters = require("./characterModel.js")

router.get("/", (req, res) => {
   Characters.find()
    .then((character) => {
        res.json(character)
    })
    .catch(err => res.send(err))
})

router.get("/", (req, res) => {
   
})

router.get("/", (req, res) => {
   
})

router.get("/", (req, res) => {
   
})

router.get("/", (req, res) => {
   
})

router.get("/", (req, res) => {
   
})

router.get("/test", (req, res) => {
    res.send("yes it is working")
})



module.exports = router