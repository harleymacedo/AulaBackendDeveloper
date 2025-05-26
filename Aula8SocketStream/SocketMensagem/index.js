const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server)
const port = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function (socket) {
    console.log("novo usuário conectado")
    socket.on('mensageiro', function (msg) {
        io.emit('mensageiro', msg)
    })

    socket.on('sincronizarConteudo', function (conteudo){
        io.emit('sincronizarConteudo', conteudo)
    })

    socket.on('mudouTemperatura', function (novaTemperatura) {
        console.log('servidor notificado: mudouTemperatura')
        io.emit('mudouTemperatura', novaTemperatura)
    })
})

server.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}/`)
})
