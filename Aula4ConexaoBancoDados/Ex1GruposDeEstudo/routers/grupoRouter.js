const grupoRouter = express.Router()
const mongoose = require('mongoose')
const grupo = require('../models/grupo')

grupoRouter.get('/grupo', async function (req, res) {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        const gruposProcurados = await grupo.find()
        res.json({'grupos': gruposProcurados})
    } catch (error) {        
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

grupoRouter.get('/grupo/:id', async function (req, res) {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        const id = req.params.id
        const grupoProcurado = await grupo.findOne({'id': id})
        res.json({'grupo': grupoProcurado})
    } catch (error) {
        res.json({'erro': true, 'mensagem': 'Erro durante a consulta'})
    }
})

grupoRouter.post('/grupo', function (req, res) {
    res.json({mensagem: 'Grupo gravado com sucesso!'})
})

grupoRouter.put('/grupo', function(req, res) {
    res.json({mensagem: 'Grupo atualizado com sucesso'})
})

grupoRouter.delete('/grupo', function(req, res) {
    res.json({mensagem: 'Grupo excluido com sucesso'})
})

module.exports = grupoRouter