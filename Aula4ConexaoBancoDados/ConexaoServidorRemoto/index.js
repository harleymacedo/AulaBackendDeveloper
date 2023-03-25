const express = require('express');
const app = express();
const disciplinaRouter = require('./routers/disciplinaRouter');
const dotenv = require('dotenv').config();

app.use(express.json());
app.use(disciplinaRouter);

app.listen(3000);