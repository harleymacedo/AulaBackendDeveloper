const express = require('express')
const app = express()

app.use(express.json())

var carros = [
    {marca: 'Toyota', modelo: 'Corolla'},
    {marca: 'Nissan', modelo: 'Sentra'},
    {marca: 'Fiat', modelo: 'Toro'},
    {marca: 'Fiat', modelo: 'Mobi'}
]

app.get('/sorteio', (req, res) => {
    let numeros = []
    let qtd = 0
    while (qtd < 10) {
        let num = Math.floor((Math.random() * 100) + 1)
        if (!(numeros.includes(num))) { 
            numeros.push(num)
            qtd++
        }
    }
    res.json({numSorteados: numeros})
})

app.get('/aposentadoria/:genero/:idade/:tempoContrib', (req, res) => {
    let genero = req.params.genero 
    let idade = parseInt(req.params.idade)
    let tempoContrib = parseInt(req.params.tempoContrib)
    console.log(genero, idade, tempoContrib)
    let decisao = 'Não'
    if (genero === 'F') {
        if ((idade >= 70) && ((idade + tempoContrib) > 90)) {decisao = 'Sim'}
    } else {
        if ((idade >= 75) && ((idade + tempoContrib) > 95)) {decisao = 'Sim'}
    }
    res.json({decisaoAposent: decisao}) 
})

app.post('/relatorio', (req, res) => {
    let {marca, modelo} = req.body
    carros.push({marca: marca, modelo: modelo})
    res.json({qtd: carros.length})
})

app.listen(3000)