const mongoose = require('mongoose')

const administrador = mongoose.Schema({
    email: String,
    senha: String,
    nome: String
})

module.exports = mongoose.model('Administrador', administrador)