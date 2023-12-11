//Importando e instanciando o ExpressJS
const express = require('express')
const app = express()

//Uso de middleware
app.use(express.static('public'))

//Importando o multer
const multer = require('multer')

// Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // Extração de nome e extensão do arquivo original
        const extensaoArquivo = file.originalname.split('.')[1]
        const novoNomeArquivo = file.originalname.split('.')[0]
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
})

//Instanciando o multer
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