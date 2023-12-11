const express = require('express')
const app = express()
const professorRouter = require('./routes/professorRouter')

app.use(express.json())
app.use(professorRouter)

app.listen(3000)
