const alunoRouter = require('express').Router();
const aluno = require('../models/Aluno');
const mongoose = require('mongoose');

alunoRouter.get('/aluno/todos', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON);
        const alunosBuscados = await aluno.find();
        res.json({alunos: alunosBuscados});
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'});
    }
});

alunoRouter.get('/aluno/matricula/:matricula', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON);
        const alunoBuscado = await aluno.find({matricula: req.params.matricula});
        res.json({aluno: alunoBuscado});
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'});
    }
});

alunoRouter.get('/aluno/curso/:cursoNome', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON);
        const alunosBuscados = await aluno.find({cursoNome: req.params.cursoNome});
        res.json({alunos: alunosBuscados});
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'});
    }
});

alunoRouter.post('/aluno', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON);
        const {matricula, nome, email, cursoNome} = req.body;
        await aluno.create({matricula: matricula, nome: nome, email: email, cursoNome: cursoNome});
        res.json({mensagem: 'Aluno cadastrado com sucesso'});
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'});
    }
});

module.exports = alunoRouter;