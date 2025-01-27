const express = require('express')
const server = express()
const cors = require('cors')
const dotenv = require('dotenv').config()

server.use(cors({
    origin: '*'
}))

//Uso de middleware para arquivos estáticos
server.use(express.static('public'))

var dadosClima = []

server.use(express.json())

server.get('/listar', (req, res) => {
    res.json({dados: dadosClima})
})

server.get('/temperatura', (req, res) => {
    dadosClima.push(req.query.temp)
    res.json({mensagem: 'Temperatura gravada'})
})

server.get('/painelClima', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

const PORT = 3001

server.listen(3000 || process.env.PORT, function () {
    console.log('Servidor rodando na porta: ' + PORT)
})