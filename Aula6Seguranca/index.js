const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
const dotenv = require('dotenv').config()


const verificarJWT = (req, res, next) => {
    const token = req.body.token
    if (!token) {
        res.json({logado: false, mensagem: 'Token não foi enviado.'})
    }
    jwt.verify(token, process.env.APP_KEY, (err, decoded) => {
        if (err) {
            res.json({locado: false, mensagem: 'Falha na autenticação'})
        }
    })
    next()
}

app.get('/login', (req, res) => {
    try {
        res.sendFile(__dirname + '/public/index.html')
    } catch (error) {
        res.sendFile(__dirname + '/public/erro.html')
    }
})

app.post('/validaLogin', (req, res) => {
    try {
        const {usuario, senha} = req.body;
        if (usuario === process.env.USUARIO && senha === process.env.SENHA) {
            let novoToken = jwt.sign({usuario}, process.env.APP_KEY, {expiresIn: 9000})
            res.json({logado: true, token: novoToken})
        }
        res.json({logado: false, mensagem: 'Usuário ou senha errados.'});        
    } catch (error) {
        res.json({logado: false, mensagem: 'Erro durante o login.'});        
    }
})

app.delete('/usuario', (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

app.listen(3000)