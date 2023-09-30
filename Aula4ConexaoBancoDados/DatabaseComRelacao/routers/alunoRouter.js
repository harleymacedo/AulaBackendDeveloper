const alunoRouter = require('express').Router()
const aluno = require('../models/aluno')
const mongoose = require('mongoose')

//Rota GET para obter todos os alunos
alunoRouter.get('/aluno/todos', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON)
        const alunosBuscados = await aluno.find()
        res.json({alunos: alunosBuscados})
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'})
    }
})

//Rota GET para obter 1 alunos, pela matrícula
alunoRouter.get('/aluno/matricula/:matricula', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON)
        const alunoBuscado = await aluno.find({matricula: req.params.matricula})
        res.json({aluno: alunoBuscado})
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'})
    }
})

//Rota GET para obter lista de alunos, pelo nome do curso
alunoRouter.get('/aluno/curso/:cursoNome', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON)
        const alunosBuscados = await aluno.find({cursoNome: req.params.cursoNome})
        res.json({alunos: alunosBuscados})
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'})
    }
})

//Rota POST para inserir um novo aluno
alunoRouter.post('/aluno', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON)
        const {matricula, nome, email, cursoNome} = req.body
        await aluno.create({matricula: matricula, nome: nome, email: email, cursoNome: cursoNome})
        res.json({mensagem: 'Aluno cadastrado com sucesso'})
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'})
    }
})

//Rota PUT para alterar um aluno, pela matrícula
alunoRouter.put('/aluno', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON)
        await aluno.findOneAndUpdate(
            {matricula: req.body.matricula},
            req.body
        )
        res.json({mensagem: 'Aluno atualizado com sucesso'})
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'})
    }
})

//Rota DELETE para excluir um aluno, pela matrícula
alunoRouter.delete('/aluno', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON)
        await aluno.deleteOne({matricula: req.body.matricula})
        res.json({mensagem: 'Aluno removido com sucesso'})
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'})
    }
})

module.exports = alunoRouter
