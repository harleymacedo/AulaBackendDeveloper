//Imports gerais
const express = require('express')
const app = express()
const cors = require('cors')

//Biblioteca para configurar e reconhecer as variáveis no arquivo .env
const dotenv = require('dotenv').config()
const disciplinaRouter = require('./routes/disciplinaRouter')

//Habilitando o cors para autorizar acesso desta API por frontend de outro servidor
app.use(cors)
//Middleware para reconhecer response json
app.use(express.json())
//Middleware para rotear as requisições
app.use(disciplinaRouter)
//Middleware para acessar arquivos estáticos
app.use(express.static('public'))

//Atendendte de requisições, a porta pode ser definida automaticamente pelo servidor
app.listen(process.env.PORT || 3000)
