const mongoose = require('mongoose');

const disciplina = mongoose.Schema({
    codigo: String,
    nome: String,
    ch: Number,
});

module.exports = mongoose.model('Disciplina', disciplina);