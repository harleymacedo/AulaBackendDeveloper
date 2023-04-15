const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const alunoRouter = require('./routers/alunoRouter');
const cursoRouter = require('./routers/cursoRouter');

app.use(express.json());
app.use(alunoRouter);
app.use(cursoRouter);

app.listen(3000);