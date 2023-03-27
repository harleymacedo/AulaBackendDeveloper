const disciplinaRouter = require('express').Router();
const disciplinas = require('../model/disciplinaModel');

disciplinaRouter.get('/disciplina/todas', (req, res) => {
    res.json(disciplinas);
});

disciplinaRouter.get('/disciplina/codigo/:codigo', (req, res) => {
    const disciplinaBuscada = disciplinas.find( (objetoAtual) => {
        return (objetoAtual.codigo === req.params.codigo);
    });
    res.json(disciplinaBuscada);
});
