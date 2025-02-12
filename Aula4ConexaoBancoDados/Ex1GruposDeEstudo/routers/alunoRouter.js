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
    res.json({mensagem: 'Aluno gravado com sucesso!'})
})

alunoRouter.put('/aluno', function(req, res) {
    res.json({mensagem: 'Aluno atualizado com sucesso'})
})

alunoRouter.delete('/aluno', function(req, res) {
    res.json({mensagem: 'Aluno excluido com sucesso'})
})

module.exports = alunoRouter