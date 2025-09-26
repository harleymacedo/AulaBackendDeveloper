const express = require('express')
const app = express()
const professorRouter = require('./routes/professorRouter')
const alunos = require('./dados/alunos')
const fs = require('fs/promises')

app.use(express.json())

app.use(professorRouter)

app.get('/alunos/:cidade', function (req, res) {
    const cidade = req.params.cidade
    const alunosRequisitados = alunos.filter(  function (itemAtual) {
        return itemAtual.cidade === cidade
    })
    res.json({"quantidade": alunosRequisitados.length, "alunos": alunosRequisitados})
})

app.get('/estados/todos', async function(req, res) {
    try {
        const conteudo = await fs.readFile(__dirname + '/dados/estados.json')
        const dados = JSON.stringify(conteudo)
        console.log(dados)
        res.json({"mensagem": "Sem erro"})
    } catch (error) {
        console.log(error.message)
        res.json({"mensagem": "Com erro"})
    }
})

app.listen(3000)
