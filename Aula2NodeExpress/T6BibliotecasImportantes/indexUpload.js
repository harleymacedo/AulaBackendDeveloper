//Importando e instanciando o ExpressJS
const express = require('express')
const app = express()
const multer = require('multer')

//Uso de middleware
app.use(express.static('public'))

//Inicializando o multer
const upload = multer({dest: 'uploads/'})

//Definindo rotas com suas devidas respostas
app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/recebeDados', upload.single('file'), (req, res) => {
    res.json({mensagem: 'Arquivo armazenado'})
})

//Ouvinte das requisições
app.listen(3000)