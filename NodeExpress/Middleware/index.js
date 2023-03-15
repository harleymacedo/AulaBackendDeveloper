const express = require('express');
const app = express();
const confereHorario = require('./middlewares/horarioPermitido');
const registrarAtividade = require('./middlewares/logAtividade');

app.use(confereHorario);

app.get('/', (req, res) => {
    res.json({mensagem: 'App em execucao'});
});

app.get('/rota2', registrarAtividade, (req, res) => {
    res.json({mensagem: 'App em execucao2'});
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});