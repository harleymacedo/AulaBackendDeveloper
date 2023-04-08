const express = require('express');
const app = express();
const professorRouter = require('./routers/professorRouter');

app.use(professorRouter);

app.listen(3001);