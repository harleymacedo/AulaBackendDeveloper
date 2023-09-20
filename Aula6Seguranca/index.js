//Imports gerais
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const cors = require('cors')
const dotenv = require('dotenv').config()
const usuarios = require('./usuarios')

//Reconhecer dados enviados no body da requisição
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Verificar se a requisição possui token válido, e portanto, o usuário está logado
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

//Rota para receber página html, para digitar usuário e senha
app.get('/login', (req, res) => {
    try {
        res.sendFile(__dirname + '/public/login.html')
    } catch (error) {
        res.sendFile(__dirname + '/public/erro.html')
    }
})

//Rota para validar login com usuário e senha
app.post('/validaLogin', (req, res) => {
    try {
        const {usuario, senha} = req.body
        if (usuario === process.env.USUARIO && senha === process.env.SENHA) {
            let novoToken = jwt.sign({usuario}, process.env.APP_KEY, {expiresIn: 9000})
            res.json({logado: true, token: novoToken})
        } else {
            res.json({logado: false, mensagem: 'Usuário ou senha errados.'})    
        }
    } catch (error) {
        res.json({logado: false, mensagem: 'Erro durante o login.'})     
    }
})

//Rota para obter usuários, com necessidade de informar token
app.delete('/usuario/todos', verificarJWT, (req, res) => {
    try {
        res.json(usuarios)
    } catch (error) {
        res.json({mensagem: 'Erro durante a consulta'})
    }
})

//Ouvinte da requisição
app.listen(3000)