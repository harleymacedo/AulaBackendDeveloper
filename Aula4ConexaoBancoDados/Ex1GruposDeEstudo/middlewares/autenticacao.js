const autenticacaoRouter = require('express').Router()
const mongoose = require('mongoose')
const administrador = require('../models/administrador')

const jwt = require('jsonwebtoken')

const verificarJWT = (req, res, next) => {
    const token = req.body.token;
    if (!token) {
        throw "Token não foi enviado";
    } 
    jwt.verify(token, process.env.APP_KEY, (err, decoded) => {
        if (err) {
            throw "Falha na autenticação";
        }
    });
    next();
}

autenticacaoRouter.post('/logar', async function (req, res) {
    try {
        const {email, senha} = req.body
        await mongoose.connect(process.env.CONNECTION_STRING)
        const resultado = await administrador.findOne({'email': email, 'senha': senha})
        if (resultado) {
            let novoToken = jwt.sign({email}, process.env.APP_KEY, {expiresIn: 9000})
            res.json({logado: true, token: novoToken})
        } else {
            res.json({logado: false, mensagem: 'Usuário ou senha errados.'})     
        }
    } catch (error) {
        res.json({logado: false, mensagem: 'Erro durante o login.'})    
    }
})

module.exports = autenticacaoRouter