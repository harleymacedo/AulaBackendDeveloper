const mongoose = require('mongoose');

const curso = mongoose.Schema({
    tipo: String,
    nome: String,
    duracao: Number
});

module.exports = mongoose.model('Curso', curso);