//Imports gerais
const express = require('express')
const app = express()
const cors = require('cors')

//Biblioteca para configurar e reconhecer as variáveis no arquivo .env
const dotenv = require('dotenv').config()
const disciplinaRouter = require('./routes/disciplinaRouter')
const usuarioRouter = require('./routes/usuarioRouter')

//Habilitando o cors para autorizar acesso desta API por frontend de outro servidor
app.use(cors(
    {
        "origin": "*",
        "methods": "GET,PUT,POST,DELETE",
    }
))
//Middleware para reconhecer request json
app.use(express.json())
//Middleware para rotear as requisições
app.use(disciplinaRouter)
app.use(usuarioRouter)
//Middleware para acessar arquivos estáticos
app.use(express.static('public'))

//Atendendte de requisições, a porta pode ser definida automaticamente pelo servidor
app.listen(process.env.PORT || 3000)
