const express = require('express')
const server = express()

const dados = [
    {nome: 'nome1', cidade: 'cidade1'},
    {nome: 'nome2', cidade: 'cidade2'},
    {nome: 'nome3', cidade: 'cidade3'},
    {nome: 'nome4', cidade: 'cidade1'},
    {nome: 'nome5', cidade: 'cidade1'},
    {nome: 'nome6', cidade: 'cidade2'},
    {nome: 'nome7', cidade: 'cidade1'},
    {nome: 'nome8', cidade: 'cidade3'},
    {nome: 'nome9', cidade: 'cidade1'},
    {nome: 'nome10', cidade: 'cidade2'},
]

server.get('/usuario/todos', (req, res) => {
    res.json(dados)
})

server.get('/usuario/cidade/:cidade', (req, res) => {
    const novosUsuarios = dados.filter( (usuarioAtual) => {
        return (usuarioAtual.cidade === req.params.cidade)
    })
    res.json(novosUsuarios)
})

server.get('/usuario/sorteado', (req, res) => {
    const indiceSorteado = Math.floor(Math.random() * 9)
    const usuarioSorteado = dados[indiceSorteado]
    res.json(usuarioSorteado)
})

server.listen(3000)