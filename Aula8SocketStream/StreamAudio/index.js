const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    res.json({mensagem: 'Funcionando corretamente'});
});

app.get('/homeMusica', (req, res) => {
    res.sendFile(__dirname + '/musicas.html');
});

app.get('/musica', (req, res) => {
    const range = req.headers.range;
    const musicaPath = './musica1.mp3';
    const musicaSize = fs.statSync(musicaPath).size;

    const chunkSize = 1 * 1e+6;
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + chunkSize, musicaSize - 1);

    const contentLength = end - start + 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${musicaSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "audio/mp3",
    }
    res.writeHead(206, headers);

    const stream = fs.createReadStream(musicaPath, {start, end});
    stream.pipe(res);
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});