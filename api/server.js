const express = require("express");
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")

const server = express();

server.use(helmet())
server.use(express.json());
server.use(morgan("dev"))
server.use(cors())

server.get("/", (req, res) => {
    // res.send("This is group project with out TL for backend week 2 sprint server is running")

    data = {
        message: "server is running /",
        reply: "way too cool tool",
    }
    res.send(`${data.message} and ${data.reply}`)
})


module.exports = server