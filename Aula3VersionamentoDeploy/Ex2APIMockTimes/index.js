//Importações gerais
const express = require('express')
const app = express()
const cors = require('cors')

//Biblioteca para configurar e reconhecer as variáveis no arquivo .env
const dotenv = require('dotenv').config()
//Permissão de acesso

//Lista de times mockado
var times = require('./model/times')

//Middleware para utilizar body da requisição
app.use(express.json())
//Middlewre para servir arquivos html
app.use(express.static('public'))

//Rota para listar as rotas disponíveis
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

//Rota get para obter todos os times
app.get('/time/todos', (req, res) => {
    res.json({"times": times})
})

//Rota get para obter um time pelo nome
app.get('/time/nome/:nome', (req, res) => {
    const timeBuscado = times.find( (elemento) => elemento.nome == req.params.nome )
    res.json({"time": timeBuscado})
})

//Rota post para inserir um novo time
app.post('/time/inserir', (req, res) => {
    times.push({nome: req.body.nome, pontos: req.body.pontos})
    res.json({"mensagem": "Novo time inserido"})
})

//Rota put para atualizar um time, pelo nome
app.put('/time/atualizar', (req, res) => {
    let encontrado = false
    times.forEach( (elemento) => {
        if (elemento.nome == req.body.nome) {
            encontrado = true
            elemento.pontos = req.body.pontos
        }
    }) 
    if (encontrado) {
        res.json({"mensagem": "Time atualizado"})
    } else {
        res.json({"mensagem": "Time não encontrado"})
    }
})

//Rota delete para excluir um time, pelo nome
app.delete('/time/excluir', (req, res) => {
    timeProcurado = times.find( (elemento) => elemento.nome == req.body.nome )
    if (timeProcurado != null) {
        var novoArray = times.filter( (elemento) => {
            return elemento.nome != req.body.nome
        } )
        times = novoArray
        res.json({"mensagem": "Time excluído"})
    } else {
        res.json({"mensagem": "Time não localizado para exclusão"})
    }
})

app.use(cors(
    {
        "origin": "*",
        "methods": "GET,PUT,POST,DELETE",
    }
))

//Atendendte de requisições, a porta pode ser definida automaticamente pelo servidor
app.listen(process.env.PORT || 3000)