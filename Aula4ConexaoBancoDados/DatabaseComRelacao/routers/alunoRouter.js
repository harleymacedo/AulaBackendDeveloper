const alunoRouter = require('express').Router();
const aluno = require('../models/Aluno');

alunoRouter.get('/aluno/todos', async (req, res) => {
    try {
        res.json({erro: false, mensagem: 'Consulta realizada com sucesso'});
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'});
    }
});

module.exports = alunoRouter;