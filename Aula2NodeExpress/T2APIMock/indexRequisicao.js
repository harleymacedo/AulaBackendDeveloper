//Imports gerais
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Rota que recebe dados JSON
app.post('/json', (req, res) => {
    res.json({
        dadoEnviado: req.body,
        headers: req.headers,
    })
})

//Rota que recebe dados de urlencoded
app.post('/body', (req, res) => {
    res.json({dadoEnviado: req.body})
})

//Ouvinto de requisição
app.listen(3000)
