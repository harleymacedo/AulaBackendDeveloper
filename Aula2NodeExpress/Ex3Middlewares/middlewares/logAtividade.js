//Função de middlwware que imprime dados da requisição quando alguma rota é acessada
const registrarAtividade = (req, res, next) => {
    let date = new Date()
    let hora = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getMinutes()
    let texto = `Atividade: ${req.ip}, ${req.url}, ${hora}:${minutos}:${segundos}`
    console.log(texto)
    //Gerar arquivo
    const fs = require('fs');
    fs.writeFile('logs.txt', texto, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Arquivo salvo com sucesso!');
        }
    });
    //Fim Gerar arquivo
    next()
}

module.exports = registrarAtividade
