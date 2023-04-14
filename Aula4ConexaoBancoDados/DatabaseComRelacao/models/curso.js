const mongoose = require('mongoose');

const curso = mongoose.Schema({
    nome: String,
    tipo: String,
    duracao: Number
});

module.exports = mongoose.model('Curso', curso);