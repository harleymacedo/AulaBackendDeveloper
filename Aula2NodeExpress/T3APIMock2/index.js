const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

const codDDD = [
    {cod: '88', estado: 'Ceará'},
    {cod: '83', estado: 'Paraíba'},
    {cod: '87', estado: 'Pernambuco'},
    {cod: '11', estado: 'São Paulo'},
    {cod: '21', estado: 'Rio de Janeiro'},
];

app.get('/ddd/:cod', (req, res) => {
    const codPassado = req.params.cod;
    const objetoBuscado = codDDD.find( (elemento) => {
        return (elemento.cod === codPassado);
    });
    res.json({estado: objetoBuscado.estado});
});

app.get('/cotacoes', async (req, res) => {
    const result1 = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL');
    const result2 = await axios.get('https://economia.awesomeapi.com.br/last/EUR-BRL');
    res.json({dolar: result1.data.USDBRL.bid, euro: result2.data.EURBRL.bid});
});

app.post('/salario', async (req, res) => {
    const salarioPassado = req.body.salario;
    const result = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL');
    const salarioReal = parseFloat(salarioPassado) * parseFloat(result.data.USDBRL.bid);
    res.json({salarioFinal: salarioReal});
});

app.listen(3000);