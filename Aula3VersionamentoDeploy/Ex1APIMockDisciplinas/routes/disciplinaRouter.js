const disciplinaRouter = require('express').Router();
var disciplinas = require('../model/disciplinaModel');

//Rota get para obter todas as disciplinas
disciplinaRouter.get('/disciplina/todas', (req, res) => {
    try {
        res.json(disciplinas)      
    } catch (error) {
        res.json({mensagem: 'Erro durante o procedimento'})  
    }
})

//Rota get para obter uma disciplina pelo código
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

//Rota post para inserir uma nova disciplina
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

//Rota put para atualizar uma disciplina
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

//Rota delete para excluir uma disciplina pelo código
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
