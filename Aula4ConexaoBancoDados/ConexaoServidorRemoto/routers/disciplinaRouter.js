//Imports gerais
const disciplinaRouter = require('express').Router();
const mongoose = require('mongoose');
const disciplina = require('../models/disciplina');

//Rota para obter todas as disciplinas
disciplinaRouter.get('/disciplina/todas', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON);
        const disciplinasBuscadas = await disciplina.find();
        res.json({disciplinas: disciplinasBuscadas});
    } catch (error) {
        res.json({error: true, mensagem: 'Erro durante a consulta', tipo: error});
    }
});

//Rota para obter uma disciplina específica
disciplinaRouter.get('/disciplina/nome/:nome', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON);
        const disciplinaBuscada = await disciplina.findOne({nome: req.params.nome});
        res.json({discplina: disciplinaBuscada});
    } catch (error) {
        res.json({error: true, mensagem: 'Erro durante a consulta', tipo: error});
    }
});

//Rota para inserir uma nova disciplina no BD
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

//Rota para atualizar uma disciplina no BD
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

//Rota para excluir uma rota no BD
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