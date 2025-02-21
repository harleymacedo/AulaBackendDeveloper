const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const alunoRouter = require('./routers/alunoRouter')
const grupoRouter = require('./routers/grupoRouter')

app.use(cors(
    {
        "origin": "*",
        "methods": "GET,PUT,POST,DELETE",
    }
))
app.use(express.static('public'))
app.use(express.json())
app.use(alunoRouter)
app.use(grupoRouter)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(process.env.PORT || 3000, function (req, res) {
    console.log(`App rodando na ${process.env.PORT}`)
})