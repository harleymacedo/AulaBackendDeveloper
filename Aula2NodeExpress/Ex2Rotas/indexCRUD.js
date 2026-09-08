const express = require('express')
const app = express()

app.use(express.json())

// Dados fictícios em memória. Peso em kg e altura em metros.
// As alterações são perdidas quando o servidor é reiniciado.
const jogadores = [
    { id: 1, nome: 'Lucas Silva', idade: 24, time: 'Fortaleza', peso: 75, altura: 1.80, posicao: 'Atacante' },
    { id: 2, nome: 'Pedro Santos', idade: 28, time: 'Ceará', peso: 82, altura: 1.88, posicao: 'Zagueiro' },
    { id: 3, nome: 'Rafael Souza', idade: 22, time: 'Flamengo', peso: 70, altura: 1.75, posicao: 'Meio-campista' }
]
let proximoId = 4

function validarJogador(req, res, next) {
    const { nome, idade, time, peso, altura, posicao } = req.body || {}
    const textosValidos = [nome, time, posicao].every(
        valor => typeof valor === 'string' && valor.trim().length > 0
    )
    const numerosValidos = Number.isInteger(idade) && idade > 0 &&
        Number.isFinite(peso) && peso > 0 &&
        Number.isFinite(altura) && altura > 0

    if (!textosValidos || !numerosValidos) {
        return res.status(400).json({
            erro: 'Informe nome, time e posicao como textos não vazios, idade como inteiro positivo e peso e altura como números positivos.'
        })
    }

    req.dadosJogador = { nome: nome.trim(), idade, time: time.trim(), peso, altura, posicao: posicao.trim() }
    next()
}

function buscarJogador(req, res, next) {
    const id = Number(req.params.id)
    const jogador = jogadores.find(jogador => jogador.id === id)

    if (!jogador) {
        return res.status(404).json({ erro: 'Jogador não encontrado.' })
    }

    req.jogador = jogador
    next()
}

// Listar todos os jogadores.
app.get('/jogadores', (req, res) => {
    res.json(jogadores)
})

// Buscar um jogador pelo ID.
app.get('/jogadores/:id', buscarJogador, (req, res) => {
    res.json(req.jogador)
})

// Cadastrar um jogador com ID gerado pelo servidor.
app.post('/jogadores', validarJogador, (req, res) => {
    const jogador = { id: proximoId++, ...req.dadosJogador }
    jogadores.push(jogador)
    res.status(201).location(`/jogadores/${jogador.id}`).json(jogador)
})

// Atualizar todos os dados de um jogador, preservando seu ID.
app.put('/jogadores/:id', buscarJogador, validarJogador, (req, res) => {
    Object.assign(req.jogador, req.dadosJogador)
    res.json(req.jogador)
})

// Excluir um jogador.
app.delete('/jogadores/:id', buscarJogador, (req, res) => {
    jogadores.splice(jogadores.indexOf(req.jogador), 1)
    res.status(204).send()
})

if (require.main === module) {
    app.listen(3000, () => {
        console.log('API de jogadores disponível em http://localhost:3000')
    })
}

module.exports = app
