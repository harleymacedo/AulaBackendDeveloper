const express = require('express')
const servidor = express()
const labs = require('./labs')
const middlewareLog = require('./middlewareLog')

servidor.use(express.json())

servidor.get('/laboratorio/todos', (req, res) => {
    res.json(labs)
})

servidor.post('/laboratorio', middlewareLog, (req, res) => {
    labs.push({nome: req.body.nome, capacidade: req.body.capacidade, descricao: req.body.descricao})
    res.json({mensagem: 'Laboratorio cadastrado'})
})

servidor.listen(3000)