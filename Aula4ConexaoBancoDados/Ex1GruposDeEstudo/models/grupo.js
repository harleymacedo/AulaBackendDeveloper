const mongoose = require('mongoose')

const grupo = mongoose.Schema({
    nome: String,
    objetivo: String,
    dataInicio: String,
    dataTermino: String,
})

module.exports = mongoose.model('Grupo', grupo)