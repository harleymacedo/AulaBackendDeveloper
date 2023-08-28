//Imports gerais
const express = require('express')
const app = express()

app.get('/perguntaChatGpt', (req, res) => {
    res.json({resposta: 'Teste resposta'})
})

app.get('/tradutorInglesPortugues', (req, res) => {
    res.json({resposta: 'Teste resposta'})
})

app.get('/processamentoImagem', (req, res) => {
    res.json({resposta: 'Teste resposta'})
})

//Ouvinte de requisições
app.listen(3000)