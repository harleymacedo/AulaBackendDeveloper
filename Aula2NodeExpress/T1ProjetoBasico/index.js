//Importando e instanciando o ExpressJS
const express = require('express')
const app = express()
const path = require('path')

//Uso de middleware
app.use(express.static('public'));

//Definindo rotas com suas devidas respostas
app.get('/recomendacao', (req, res) => {
    res.json({recomendacao: 'Lendas da paixão'})
})
app.get('/lancamentos', (req, res) => {
    res.json({recomendacao: ['7 anos no Tibet', 'Tempo de glória']})
})
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//Ouvinte das requisições
app.listen(3000)