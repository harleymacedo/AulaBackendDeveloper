const express = require('express')
const app = express()
const professorRouter = require('./routes/professorRouter')
const cors = require('cors')

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(professorRouter)

app.listen(3001)
