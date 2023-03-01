const express = require('express');
const app = express();
const mongoose = require('mongoose');
const disciplina = require('./models/disciplina');

app.get('/disciplina/:cod', async (req, res) => {
    try {
        await mongoose.connect(process.env.DB_STR_CON);
        const disciplinaBuscada = await disciplina.findOne({codigo: req.params.cod});
        res.json({disciplina: disciplinaBuscada});
    } catch (error) {
        res.json({error: true, mensagem: 'Erro durante o cadastro'});
    }
});