const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({'mensagem': 'Rota / acionada'})
})

app.listen(3000)