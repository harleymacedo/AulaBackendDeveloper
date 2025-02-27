const jwt = require('jsonwebtoken')

const verificarJWT = (req, res, next) => {
    const token = req.body.token;
    if (!token) {
        throw "Token não foi enviado";
    } 
    jwt.verify(token, process.env.APP_KEY, (err, decoded) => {
        if (err) {
            throw "Falha na autenticação";
        }
    });
    next();
}

app.post('/logar', (req, res) => {
    try {
        const {usuario, senha} = req.body
        if (usuario === process.env.USUARIO && senha === process.env.SENHA) {
            let novoToken = jwt.sign({usuario}, process.env.APP_KEY, {expiresIn: 9000})
            res.json({logado: true, token: novoToken})
        } else {
            res.json({logado: false, mensagem: 'Usuário ou senha errados.'})     
        }
    } catch (error) {
        res.json({logado: false, mensagem: 'Erro durante o login.'})    
    }
})

module.exports = verificarJWT