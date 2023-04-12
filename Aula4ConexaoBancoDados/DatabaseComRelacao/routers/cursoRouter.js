const cursoRouter = require('express').Router();
const curso = require('../models/curso');

cursoRouter.get('/curso/todos', async (req, res) => {
    try {
        res.json({erro: false, mensagem: 'Consulta realizada com sucesso'});
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'}); 
    }
});

module.exports = cursoRouter;