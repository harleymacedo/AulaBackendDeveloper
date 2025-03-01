const alunoRouter = require('express').Router()
const mongoose = require('mongoose')
const aluno = require('../models/aluno')
const verificarJWT = require('../middlewares/autenticacao')

alunoRouter.get('/aluno', async function (req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const alunosBuscados = await aluno.find()
        res.json({'alunos': alunosBuscados})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

alunoRouter.get('/aluno/:id', async function (req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const id = req.params.id
        const alunoBuscado = await aluno.findOne({'_id': id})
        res.json({'aluno': alunoBuscado})    
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

alunoRouter.post('/aluno', verificarJWT, async function (req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
       const dados = req.body
        await aluno.create(dados)
        res.json({mensagem: 'Aluno gravado com sucesso!'})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

alunoRouter.put('/aluno', verificarJWT, async function(req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const alunoPassado = req.body
        await aluno.findOneAndUpdate({'id': alunoPassado.id}, alunoPassado)        
        res.json({mensagem: 'Aluno atualizado com sucesso!'})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

alunoRouter.delete('/aluno', verificarJWT, async function(req, res) {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        const dados = req.body
        await aluno.deleteOne(dados)
        res.json({mensagem: 'Aluno excluido com sucesso'})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

module.exports = alunoRouter