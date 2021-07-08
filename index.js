const express = require('express')
require('dotenv').config()
const path = require('path')

const server = express()

// teaches express to parse req bodies into json
server.use(express.json())

// build an absolute path to our static assets regardless of machine
server.use(express.static( path.join(__dirname, 'client/build') ))

if(process.env.NODE_ENV === 'development'){
    const cors = require('cors')
    server.use(cors())
}

//catch all that sends back index.html
server.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log('listening on port', PORT)
})