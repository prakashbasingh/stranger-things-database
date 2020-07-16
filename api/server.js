const express = require("express");
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")

const server = express();

server.use(helmet())
server.use(express.json());
server.use(morgan("dev"))

module.exports = server