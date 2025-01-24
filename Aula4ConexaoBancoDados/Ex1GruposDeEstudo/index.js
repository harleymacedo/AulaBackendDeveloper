const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

app.get('/grupos', function (req, res) {
    res.json({gruposEncontrados: []})
})

app.listen(3000, function (req, res) {
    console.log(`App rodando na ${process.env.LOCAL_PORT}`)
})