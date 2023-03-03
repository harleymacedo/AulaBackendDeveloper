const express = require('express');
const app = express();
const disciplinaRouter = require('./routers/disciplinaRouter');

app.use(disciplinaRouter);

app.listen(3000);