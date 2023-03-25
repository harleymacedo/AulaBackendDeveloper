const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

app.use(express.json());

app.listen(process.env.PORT || 3000);