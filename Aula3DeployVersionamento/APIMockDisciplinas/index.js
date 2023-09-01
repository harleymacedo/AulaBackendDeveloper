const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const disciplinaRouter = require('./routes/disciplinaRouter')

app.use(express.json())
app.use(disciplinaRouter)

app.listen(process.env.PORT || 3000)
