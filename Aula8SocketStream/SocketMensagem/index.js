const express = require('express');
const app = express();

const http = require('http')
const server = http.createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log("novo usuário conectado");
  socket.on('mensageiro', (msg) => {
    io.emit('mensageiro', msg);
  });

  socket.on('sincronizarConteudo', (conteudo) => {
    io.emit('sincronizarConteudo', conteudo);
  });

  socket.on('mudouTemperatura', (novaTemperatura) => {
    console.log('servidor notificado: mudouTemperatura');
    io.emit('mudouTemperatura', novaTemperatura);
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}/`);
});
