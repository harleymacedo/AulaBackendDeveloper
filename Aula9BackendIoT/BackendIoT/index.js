const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')

var temperaturaAtual = 30.0

app.use(express.json())

app.get('/temperatura', (req, res) => {
    res.json({valorTemperatura: temperaturaAtual})
})

app.post('/temperatura', (req, res) => {
    temperaturaAtual = req.body.novaTemperatura
    res.json({mensagem: 'Temperatura atualizada'})
})

app.listen(process.env.PORT || 3000)