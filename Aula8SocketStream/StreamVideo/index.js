const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
    res.json({mensagem: 'Funcionando corretamente'});
});

app.get('/homeVideo', (req, res) => {
    res.sendFile(__dirname + '/videos.html');
});

app.get('/video', (req, res) => {
    const range = req.headers.range;
    const videoPath = './toyotaPrius.mp4';
    const videoSize = fs.statSync(videoPath).size;

    const chunkSize = 1 * 1e+6;
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + chunkSize, videoSize - 1);

    const contentLength = end - start + 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    }
    res.writeHead(206, headers);

    console.log(start, end, chunkSize)

    const stream = fs.createReadStream(videoPath, {start, end});
    stream.pipe(res);
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});