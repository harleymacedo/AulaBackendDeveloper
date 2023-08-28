//Importando e instanciando o ExpressJS
const express = require('express')
const app = express()
const QRCode = require('qrcode')

//Uso de middleware
app.use(express.static('public'))

//Definindo rotas com suas devidas respostas
app.get('/gerarQrcode', (req, res) => {
    QRCode.toFile('./public/qrcode.png', 'IFCE Campus Crato - Curso de SI', 
        {errorCorrectionLevel: 'H'},
        () => {
            //Gerando página que irá exibir o QRCode
            res.sendFile(__dirname + '/public/indexQrcode.html')
        }
    )
})

//Ouvinte das requisições
app.listen(3000)
