//Importações gerais
const express = require('express')
const app = express()
var times = require('./times')

//Middleware para utilizar body da requisição
app.use(express.json())

//Rota para teste simples
app.get('/', (req, res) => {
    res.json([
        {
            "Rota": "GET /time/todos",
            "Descrição": "Rota get para obter todos os times"
        },
        {
            "Rota": "GET /time/nome/:nome",
            "Descrição": "Rota get para obter um time pelo nome"
        },
        {
            "Rota": "POST /time/inserir",
            "Descrição": "Rota post para inserir um novo time"
        },
        {
            "Rota": "PUT /time/atualizar",
            "Descrição": "Rota put para atualizar um time, pelo nome"
        },
        {
            "Rota": "DELETE /time/excluir",
            "Descrição": "Rota delete para excluir um time, pelo nome"
        },
    ]
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

//Atendendte de requisições, a porta pode ser definida automaticamente pelo servidor
app.listen(process.env.PORT || 3000)