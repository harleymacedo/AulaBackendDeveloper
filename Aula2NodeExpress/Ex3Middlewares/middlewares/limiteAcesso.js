var nAcessos = 0

function limiteAcesso (req, res, next) {
    nAcessos++
    if (nAcessos >= 5) {
        res.json({mensagem: 'Limite atingido'})
    } else {
        next()
    }
}

module.exports = limiteAcesso