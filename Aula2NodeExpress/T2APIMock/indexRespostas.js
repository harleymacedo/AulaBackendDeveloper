const express = require('express')
const app = express()
const {engine} = require('express-handlebars')

//Definindo motor de view
app.engine('handlebars', engine({defaultLayout: null}) )

//Sets
app.set('view engine', 'handlebars')

//Resposta JSON
app.get('/json', (req, res) => {
    res.json({mensagem: 'Resposta JSON enviada'})
})

//Reposta send
app.get('/send', (req, res) => {
    res.send('Resposta de texto enviada')
})

//Resposta de download
app.get('/download', (req, res) => {
    res.download('recursos/relatorio.docx')
})

//Resposta de redirecionamento
app.get('/redirect', (req, res) => {
    res.redirect('/json')
})

app.get('/sendFile', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

//Resposta render com handlebars
app.get('/render', (req, res) => {
    res.render('sobre', {dado: 'Campus Crato'})
})

//Ouvinte de requisição
app.listen(3000)
