//Função de middleware que verifica se já mais de 8 horas para liberar acesso
const confereHorario = (req, res, next) => {
    let date = new Date()
    let hora = date.getHours()
    if (hora >= 10) {
        return res.json({mensagem: 'Nesse horário não é permitido fazer essa requisição'})
    }
    next()
}

module.exports = confereHorario
