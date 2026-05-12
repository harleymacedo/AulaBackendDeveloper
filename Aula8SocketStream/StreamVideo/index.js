const express = require('express');
const app = express();
const fs = require('fs');

// Rota principal para verificar se o servidor está online
app.get('/', (req, res) => {
    res.json({ mensagem: 'Funcionando corretamente' });
});

// Rota que serve o arquivo HTML para visualização do vídeo
app.get('/homeVideo', (req, res) => {
    res.sendFile(__dirname + '/videos.html');
});

// Rota responsável pelo streaming do vídeo
app.get('/video', (req, res) => {
    // Obtém o cabeçalho 'range' da requisição (define qual parte do vídeo o navegador está pedindo)
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requer cabeçalho Range");
        return;
    }

    const videoPath = './toyotaPrius.mp4';
    const videoSize = fs.statSync(videoPath).size;

    // Define o tamanho do pedaço (chunk) de vídeo a ser enviado (1MB neste caso)
    const chunkSize = 1 * 1e+6; // 1 Megabyte
    
    // Calcula o byte inicial e final do pedaço solicitado
    const start = Number(range.replace(/\D/g, ''));
    const end = Math.min(start + chunkSize, videoSize - 1);

    // Calcula o tamanho do conteúdo a ser enviado
    const contentLength = end - start + 1;

    // Define os cabeçalhos necessários para o streaming de vídeo (HTTP 206 - Partial Content)
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    }

    // Retorna o status 206 (Conteúdo Parcial) com os cabeçalhos configurados
    res.writeHead(206, headers);

    // Log para monitorar o carregamento dos pedaços no console
    console.log(`Enviando chunk: Início ${start}, Fim ${end}, Tamanho ${chunkSize}`);

    // Cria um stream de leitura do arquivo para o intervalo específico e envia para a resposta
    const stream = fs.createReadStream(videoPath, { start, end });
    stream.pipe(res);
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('App rodando na porta 3000 \n Teste a rota: http://localhost:3000/homeVideo');
});