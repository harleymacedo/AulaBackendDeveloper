const registrarAtividade = (req, res, next) => {
    let date = new Date()
    let hora = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getMinutes()
    console.log(`Atividade: ${req.ip}, ${req.url}, ${hora}:${minutos}:${segundos}`)
    next()
}

module.exports = registrarAtividade