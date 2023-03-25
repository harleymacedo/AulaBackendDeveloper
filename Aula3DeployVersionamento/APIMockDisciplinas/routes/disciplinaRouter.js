const disciplinaRouter = require('express').Router();
const disciplinas = require('../model/disciplinaModel');

disciplinaRouter.get('/disciplina/todas', (req, res) => {
    res.json(disciplinas);
});