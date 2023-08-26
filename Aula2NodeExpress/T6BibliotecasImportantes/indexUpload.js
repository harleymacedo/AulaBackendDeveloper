//Importando e instanciando o ExpressJS
const express = require('express')
const app = express()
const multer = require('multer')

//Uso de middleware
app.use(express.static('public'))

// Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // Extração da extensão do arquivo original:
        const extensaoArquivo = file.originalname.split('.')[1]
        // Cria um código randômico que será o nome do arquivo
        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex')
        // Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});
const upload = multer({ storage })

//Definindo rotas com suas devidas respostas
app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})
app.post('/recebeDados', upload.single('file'), (req, res) => {
    res.json({mensagem: 'Arquivo armazenado'})
})

//Ouvinte das requisições
app.listen(3000)