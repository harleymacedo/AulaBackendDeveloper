const cursoRouter = require('express').Router()
const curso = require('../models/curso')
const mongoose = require('mongoose')

cursoRouter.get('/curso/todos', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON)
        const cursosBuscados = await curso.find()
        res.json({cursos: cursosBuscados})
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'})
    }
})

cursoRouter.get('/curso/nome/:nome', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON)
        const cursoBuscado = await curso.find({nome: req.params.nome})
        res.json({curso: cursoBuscado})
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'})
    }
})

cursoRouter.post('/curso', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON)
        const {nome, tipo, duracao} = req.body
        await curso.create({nome: nome, tipo: tipo, duracao: duracao})
        res.json({mensagem: 'Cadastro realizado com sucesso'})
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'})
    }
})

module.exports = cursoRouter
