const disciplinaRouter = require('express').Router();
const mongoose = require('mongoose');
const disciplina = require('../models/disciplina');
const dotenv = require('dotenv').config();

//Rota para obter 1 disciplina espeícifca
disciplinaRouter.get('/disciplina/:cod', async (req, res) => {
    try {
        console.log('Response sendo preparada');
        await mongoose.connect(process.env.DB_STR_CON);
        const disciplinaBuscada = await disciplina.findOne({codigo: req.params.cod});
        res.json({disciplina: disciplinaBuscada});
    } catch (error) {
        res.json({error: true, mensagem: 'Erro durante o cadastro'});
    }
});

//Rota para obter todas as disciplinas
disciplinaRouter.get('/disciplinas', async (req, res) => {
    try {
        console.log('Response sendo preparada');
        await mongoose.connect(process.env.DB_STR_CON);
        const disciplinaBuscada = await disciplina.findOne({codigo: req.params.cod});
        res.json({disciplina: disciplinaBuscada});
    } catch (error) {
        res.json({error: true, mensagem: 'Erro durante o cadastro'});
    }
});

module.exports = disciplinaRouter;