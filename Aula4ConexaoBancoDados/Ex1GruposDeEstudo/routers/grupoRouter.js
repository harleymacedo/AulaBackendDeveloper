const grupoRouter = require('express').Router()
const mongoose = require('mongoose')
const grupo = require('../models/grupo')
const verificarJWT = require('../middlewares/autenticacao')

grupoRouter.get('/grupo', async function (req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const gruposProcurados = await grupo.find()
        res.json({'grupos': gruposProcurados})
    } catch (error) {        
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

grupoRouter.get('/grupo/:id', async function (req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const id = req.params.id
        const grupoProcurado = await grupo.findOne({'id': id})
        res.json({'grupo': grupoProcurado})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

grupoRouter.post('/grupo', verificarJWT, async function (req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const dados = req.body
        await grupo.create(dados)
        res.json({'erro': false, 'mensagem': 'Consulta realizada com sucesso'})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }    
})

grupoRouter.put('/grupo', verificarJWT, async function(req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const dados = req.body
        const grupoProcurado = grupo.findOneAndUpdate({'id': dados.id}, dados)
        res.json({'erro': false, 'mensagem': 'Consulta realizada com sucesso'})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

grupoRouter.delete('/grupo', verificarJWT, async function(req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const dados = req.body
        await grupo.deleteOne({'id': dados.id})
        res.json({'erro': false, 'mensagem': 'Consulta realizada com sucesso'})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

module.exports = grupoRouter