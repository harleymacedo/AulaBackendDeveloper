const express = require('express')
const app = express()
const professorRouter = require('./routes/professorRouter')
const cors = require('cors')
const fs = require('fs').promises

app.use(cors({
    origin: '*'
}))

app.use(express.json())

app.use(professorRouter)

app.get('/capitais/todas', async function (req, res) {
    const dados = await fs.readFile(__dirname + '/dados/municipios.json')
    const dadosJson = await dados.json()
    const dadosProcurados = dadosJson.map( function(itemAtual) {
        return itemAtual.capital === 1
    })
    res.json({'cidadesCapitais': dadosProcurados})
})

app.listen(3000)
