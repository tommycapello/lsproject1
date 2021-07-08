const express = require('express')
require('dotenv').config()

const server = express()

server.use(express.json()) // teaches express to parse req bodies into json

if(process.env.NODE_ENV === 'development'){
    const cors = require('cors')
    server.use(cors())
}

server.use('*', (req,res) => {
    res.send('<h1>What up!!</h1>')
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log('listening on port', PORT)
})