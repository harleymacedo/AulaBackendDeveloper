//Importações gerais
const express = require('express')
const app = express()
var times = require('./times')

//Rota para teste simples
app.get('/', (req, res) => {
    res.json({'mensagem': 'Rota / acionada'})
})

//Rota get para obter todos os times
app.get('/times/todos', (req, res) => {
    res.json({"times": times})
})

//Rota get para obter um time pelo nome
app.get('/times/:nome', (req, res) => {
    res.json({"time": null})
})

//Rota post para inserir um novo time
app.post('/times/inserir', (req, res) => {
    res.json({"mensagem": "Novo time inserido"})
})

//Rota update para atualizar um time, pelo nome
app.update('/times/atualizar', (req, res) => {
    res.json({"mensagem": "Time atualizado"})
})

//Rota delete para excluir um time, pelo nome
app.delete('/times/excluir', (req, res) => {
    res.json({"mensagem": "Time exluido"})
})

//Ouvinte de requisições
app.listen(3000)