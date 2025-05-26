const express = require('express')
const app = express()
const socketIO = require('socket.io')

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

socketIO.on('connection', function (socket) {
    console.log('Usuário conectado')

    socket.on('texto', function (data) {
        console.log('Texto recebido:', data)
        socket.broadcast.emit('texto', data)
    })

    socket.on('disconnect', function () {
        console.log('Usuário desconectado')
    })
})

app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000')
})