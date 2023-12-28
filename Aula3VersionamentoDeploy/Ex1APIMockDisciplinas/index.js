//Imports gerais
const express = require('express')
const app = express()
//Biblioteca para configurar e reconhecer as variáveis no arquivo .env
const dotenv = require('dotenv').config()
const disciplinaRouter = require('./routes/disciplinaRouter')
//Biblioteca para configurar o acesso à aplicações por outros servidores
const cors = require('cors')

//Middleware para reconhecer response json
app.use(express.json())
//Middleware para rotear as requisições
app.use(disciplinaRouter)

//Atendendte de requisições, a porta pode ser definida automaticamente pelo servidor
app.listen(process.env.PORT || 3000)
