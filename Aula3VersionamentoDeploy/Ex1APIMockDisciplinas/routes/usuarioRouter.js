//imports gerais
const usuarioRouter = require('express').Router()
const usuarios = require('../model/usuarioModel')

//Rota get para verificar o login de acordo com usuario e senha
usuarioRouter.get('/verificarLogin', (req, res) => {
    try {
        let logado = false
        usuarios.forEach( (elemento) => {
            if (elemento.nome === req.body.nome && elemento.senha === req.body.senha){
                logado = true
            }
        })
        res.json({'logado': logado, 'erro': false, 'mensagem': 'Usuário ou senha incorretos'})
    } catch (error) {
        res.json({'logado': logado, 'erro': true, 'mensagem': 'Não foi possível realizar a verificação'})
    }
})

module.exports = usuarioRouter