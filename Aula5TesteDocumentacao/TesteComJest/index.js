const express = require('express');
const app = express();
const jest = require('jest');
const professores = require('./routers/professorRouter');

app.get('/professor/todos', (req, res) => {
    res.json(professores);
});

app.get()

app.listen(3000);