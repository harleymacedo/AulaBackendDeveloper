const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const cors = require('cors');

app.use(express.json());

var professores = [
    {nome: 'Mario', area: 'Area1'},
    {nome: 'Luigi', area: 'Area2'},
    {nome: 'Alex', area: 'Area3'}
];

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

app.post('/logar', (req, res) => {
    try {
        const {usuario, senha} = req.body;
        if (usuario === process.env.USUARIO && senha === process.env.SENHA) {
            let novoToken = jwt.sign({usuario}, process.env.APP_KEY, {expiresIn: 9000});
            res.json({logado: true, token: novoToken});
        } else {
            res.json({logado: false, mensagem: 'Usuário ou senha errados.'});        
        }
    } catch (error) {
        res.json({logado: false, mensagem: 'Erro durante o login.'});        
    }
});

//Rota sem verificação de token, mas com cors
app.get('/professor/todos', cors({origin: 'http://meuservidor.com.br'}), (req, res) => {
    try {
        res.json(professores);
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro na consulta'});
    }
});

//Rota sem verificação de token nem verificação de cors
app.get('/professor/aberto/todos', cors({origin: '*'}), (req, res) => {
    try {
        res.json(professores);
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro na consulta'});
    }
});

//Cadastrar professor só é permitido estando logado
app.post('/professor', verificarJWT, (req, res) => {
    try {
        const {nome, area, token} = req.body;
        const novoProf = {nome, area};
        professores.push(novoProf);
        res.json({mensagem: 'Novo professor cadastrado.'});
    } catch (error) {
        res.json({erro: true, mensagem: 'Não foi possível realizar cadastro'});
    }
});

app.listen(process.env.PORT || 3001);