const disciplinaRouter = require('express').Router();
const disciplinas = require('../model/disciplinaModel');

disciplinaRouter.get('/disciplina/todas', (req, res) => {
    try {
        res.json(disciplinas)      
    } catch (error) {
        res.json({mensagem: 'Erro durante o procedimento'})  
    }
})

disciplinaRouter.get('/disciplina/codigo/:codigo', (req, res) => {
    try {
        const disciplinaBuscada = disciplinas.find( (objetoAtual) => {
            return (objetoAtual.codigo === req.params.codigo)
        })
        res.json(disciplinaBuscada)
    } catch (error) {
        res.json({mensagem: 'Erro durante o procedimento'})
    }
    
})

disciplinaRouter.post('/disciplina', (req, res) => {
    try {
        const {nome, codigo, cargaHoraria} = req.body
        const novaDisc = {nome: nome, codigo: codigo, cargaHoraria: cargaHoraria}
        disciplinas.push(novaDisc)
        res.json({mensagem: 'Disciplina adicionada'})    
    } catch (error) {
        res.json({mensagem: 'Erro durante o procedimento'})    
    }
})

disciplinaRouter.put('/disciplina', (req, res) => {
    try {
        disciplinas.forEach( (objetoAtual) => {
            if (objetoAtual.codigo === req.body.codigo) {
                objetoAtual.nome = req.body.nome
                objetoAtual.cargaHoraria = req.body.cargaHoraria
            }
        })
        res.json({mensagem: 'Disciplina alterada'})
    } catch (error) {
        res.json({mensagem: 'Erro durante o procedimento'})
    }
})

disciplinaRouter.delete('/disciplina/:codigo', (req, res) => {
    try {
        disciplinas = disciplinas.filter( (objetoAtual) => {
            return (objetoAtual.codigo !== req.params.codigo)
        })
        res.json({mensagem: 'Disciplina excluída'})
    } catch (error) {
        res.json({mensagem: 'Erro durante o procedimento'})
    }
})

module.exports = disciplinaRouter
