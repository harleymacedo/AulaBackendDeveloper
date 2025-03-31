const mongoose = require('mongoose')

const evento = mongoose.Schema({
    nome: String,
    data: String,
    local: String,
    descricao: String
})

module.exports = mongoose.model('Evento', evento)