// Função de middleware que imprime dados da requisição quando alguma rota é acessada
const fs = require('fs')
const path = require('path')

const registrarAtividade = (req, res, next) => {
    const date = new Date()
    const hora = date.toLocaleString('pt-br')
    const texto = `Atividade: ${req.ip}, ${req.method} ${req.url}, ${hora}`

    console.log(texto)

    // Anexa o log em um arquivo dentro da pasta do projeto (cria se não existir)
    const logFilePath = path.join(__dirname, '..', 'logs.txt')
    fs.appendFile(logFilePath, texto + '\n', (err) => {
        if (err) {
            console.error('Erro ao salvar log:', err)
        }
    })

    next()
}

module.exports = registrarAtividade
