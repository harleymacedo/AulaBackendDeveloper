const express = require('express');
const app = express();
const alunoRouter = require('./routers/alunoRouter');

app.use(express.json());
app.use(alunoRouter);

app.listen(3000);