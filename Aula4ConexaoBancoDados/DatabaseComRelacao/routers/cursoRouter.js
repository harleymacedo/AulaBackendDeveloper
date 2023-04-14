const cursoRouter = require('express').Router();
const curso = require('../models/Curso');
const mongoose = require('mongoose');

cursoRouter.get('/curso/todos', async (req, res) => {
    try {
        await mongoose.connect(process.env.BD_STR_CON);
        const cursosBuscados = curso.find();
        res.json({cursos: cursosBuscados});
    } catch (error) {
        res.json({erro: true, mensagem: 'Erro durante consulta'}); 
    }
});

module.exports = cursoRouter;