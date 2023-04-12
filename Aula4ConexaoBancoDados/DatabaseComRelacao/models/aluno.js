const mongoose = require('mongoose');

const aluno = mongoose.Schema({
    matricula: String,
    nome: String,
    email: String
});

module.exports = mongoose.model('Aluno', aluno);