const express = require('express')
require('dotenv').config()

const server = express()

server.use(express.json()) // teaches express to parse req bodies into json

if(process.env.NODE_ENV === 'development'){
    const cors = require('cors')
    server.use(cors())
}