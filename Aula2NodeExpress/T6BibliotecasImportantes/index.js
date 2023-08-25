//Imports gerais
const express = require('express')
const app = express()
const PDFKIT = require('pdfkit')
const fs = require('fs')

//Rota para gerar o PDF e disponilizar para download
app.get('/relatorio/pdf', (req, res) => {
    try {
        const pdf = new PDFKIT()
        pdf.text('Relatório com os filmes mais assistidos')
        pdf.end()
        pdf.pipe(fs.createWriteStream('relatorio.pdf')).on('finish', () => {
            res.download('./relatorio.pdf')
        })
    } catch (error) {
        res.json({mensagem: 'Erro na geração do relatório'})
    }
})

//Ouvinte de requisições
app.listen(3000)