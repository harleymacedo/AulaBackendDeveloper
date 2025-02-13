const alunoRouter = express.Router()
const mongoose = require('mongoose')
const aluno = require('../models/aluno')

alunoRouter.get('/aluno', function (req, res) {
    try {
        mongoose.connect(process.env.DB_CONNECTION_STRING)
        const alunosBuscados = aluno.find()
        res.json({'alunos': alunosBuscados})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

alunoRouter.get('/aluno/:id', function (req, res) {
    try {
        mongoose.connect(process.env.DB_CONNECTION_STRING)
        const id = req.params.id
        const alunoBuscado = aluno.findOne({'id': id})
        res.json({'aluno': alunoBuscado})    
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

alunoRouter.post('/aluno', function (req, res) {
    try {
        dados = req.body
        aluno.create(dados)
        res.json({mensagem: 'Aluno gravado com sucesso!'})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

alunoRouter.put('/aluno', function(req, res) {
    try {
        const alunoPassado = req.body
        aluno.findOneAndUpdate({'id': alunoPassado.id}, alunoPassado)        
        res.json({mensagem: 'Aluno atualizado com sucesso!'})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

alunoRouter.delete('/aluno', function(req, res) {
    try {
        const dados = req.body
        aluno.deleteOne(dados)
        res.json({mensagem: 'Aluno excluido com sucesso'})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

module.exports = alunoRouter