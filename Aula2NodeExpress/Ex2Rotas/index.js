const express = require('express')
const app = express()
const professorRouter = require('./routes/professorRouter')
const alunos = require('./dados/alunos')

app.use(express.json())

app.use(professorRouter)

app.get('/alunos/:cidade', function (req, res) {
    const cidade = req.params.cidade
    const alunosRequisitados = alunos.filter(  function (itemAtual) {
        return itemAtual.cidade === cidade
    })
    res.json({"quantidade": alunosRequisitados.length, "alunos": alunosRequisitados})
})

app.listen(3000)
