//Imports gerais
const express = require('express')
const app = express()

//Imports dos middlewares
const confereHorario = require('./middlewares/horarioPermitido')
const registrarAtividade = require('./middlewares/logAtividade')
const limiteAcesso = require('./middlewares/limiteAcesso')

//Anexando o middleware para todas as rotas
app.use(registrarAtividade)
app.use(confereHorario)

app.use(express.json())


//Rota raiz, que será interceptada pelo middleware registrarAtividade
app.get('/', limiteAcesso, (req, res) => {
    res.json({mensagem: 'App em execucao'})
})

//Middleware específico, que vai interceptar apenas esta rota
app.get('/rota2', (req, res) => {
    res.json({mensagem: 'App em execucao2'})
})

app.get('/rota3', (req, res) => {
    res.json({mensagem: 'App em execucao3'})
})

//Ouvinte de requisições
app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})
