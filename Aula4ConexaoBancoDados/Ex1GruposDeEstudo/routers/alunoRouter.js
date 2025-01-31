const express = require('express')
const alunoRouter = express.Router();

alunoRouter.get('/aluno', function (req, res) {
    res.json({alunos: []})
})

alunoRouter.get('/aluno/:id', function (req, res) {
    res.json({alunos: []})
})

alunoRouter.post('/aluno', function (req, res) {
    res.json({mensagem: 'Aluno gravado com sucesso!'})
})

alunoRouter.put('/aluno', function(req, res) {
    res.json({mensagem: 'Aluno atualizado com sucesso'})
})

alunoRouter.delete('/aluno', function(req, res) {
    res.json({mensagem: 'Aluno excluido com sucesso'})
})

module.exports = alunoRouter