const express = require('express')
const app = express()
const professorRouter = require('./routes/professorRouter')
const cors = require('cors')

app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(professorRouter)
app.get('/cidades', function (req, res) {
    const fs = require('fs');
    fs.readFile('./municipios.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err)
        return
    }
    try {
        const jsonData = JSON.parse(data) // Converte o conteúdo para objeto JS
        console.log("Lista de cidades:")

        jsonData.cidades.forEach(cidade => {
        console.log(`- ${cidade.nome} (${cidade.estado})`)
        })
    } catch (parseError) {
        console.error('Erro ao analisar o JSON:', parseError)
    }
    })
})

app.listen(3001)
