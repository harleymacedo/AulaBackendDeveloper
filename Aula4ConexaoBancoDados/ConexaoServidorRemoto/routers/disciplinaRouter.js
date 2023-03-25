const disciplinaRouter = require('express').Router();
const mongoose = require('mongoose');
const disciplina = require('../models/disciplina');

//Rota para obter todas as disciplinas
disciplinaRouter.get('/disciplina/todas', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON);
        const disciplinasBuscada = await disciplina.find();
        res.json({disciplinas: disciplinasBuscada});
    } catch (error) {
        res.json({error: true, mensagem: 'Erro durante o cadastro', tipo: error});
    }
});

disciplinaRouter.post('/disciplina', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON);
        const {nome, ch} = req.body;
        await disciplina.create({nome: nome, ch: ch});
        res.json({mensagem: 'Cadastro realizado'});
    } catch (error) {
        res.json({error: true, mensagem: 'Erro durante o cadastro', tipo: error});
    }
});

disciplinaRouter.put('/disciplina', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON);
        const {nome, ch} = req.body;
        await disciplina.updateOne({nome: nome}, {ch: ch});
        res.json({mensagem: 'Atualização realizada'});
    } catch (error) {
        res.json({error: true, mensagem: 'Erro durante a atualização', tipo: error});
    }
});

disciplinaRouter.delete('/disciplina', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON);
        const {nome} = req.body;
        await disciplina.deleteOne({nome: nome});
        res.json({mensagem: 'Exclusão realizada'});
    } catch (error) {
        res.json({error: true, mensagem: 'Erro durante a exclusão', tipo: error});
    }
});

module.exports = disciplinaRouter;