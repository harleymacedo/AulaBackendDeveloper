//imports gerais
const usuarioRouter = require('express').Router()
const usuarios = require('../model/usuarioModel')

//Rota get para verificar o login de acordo com usuario e senha
usuarioRouter.post('/verificarLogin', (req, res) => {
    try {
        let logado = false
        usuarios.forEach( (elemento) => {
            if (elemento.nome === req.body.nome && elemento.senha === req.body.senha){
                logado = true
            }
        })
        res.json({'logado': logado, 'erro': false})
    } catch (error) {
        res.json({'logado': logado, 'erro': true})
    }
})

module.exports = usuarioRouter