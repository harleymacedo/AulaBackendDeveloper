const eventoRouter = require('express').Router()
const mongoose = require('mongoose')
const evento = require('../models/evento')
const verificarJWT = require('../middlewares/autenticacao')

eventoRouter.get('/evento', async function (req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const eventosBuscados = await evento.find()
        res.json({'eventos': eventosBuscados})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

module.exports = eventoRouter 