const express = require('express')
const grupoRouter = express.Router();

grupoRouter.get('/grupo', function (req, res) {
    res.json({grupos: []})
})

grupoRouter.get('/grupo/:id', function (req, res) {
    res.json({grupo: []})
})

grupoRouter.post('/grupo', function (req, res) {
    res.json({mensagem: 'Grupo gravado com sucesso!'})
})

grupoRouter.put('/grupo', function(req, res) {
    res.json({mensagem: 'Grupo atualizado com sucesso'})
})

grupoRouter.delete('/grupo', function(req, res) {
    res.json({mensagem: 'Grupo excluido com sucesso'})
})

module.exports = grupoRouter