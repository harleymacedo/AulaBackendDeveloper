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
app.use(express.json())
app.use(alunoRouter)
app.use(grupoRouter)

app.listen(process.env.PORT || 3001, function (req, res) {
    console.log(`App rodando na ${process.env.PORT}`)
})