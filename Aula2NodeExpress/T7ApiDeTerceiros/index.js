//Imports gerais
const express = require('express')
const app = express()
const axios = require('axios')
const dotenv = require('dotenv').config()

app.get('/perguntaChatGpt', (req, res) => {
    res.json({ resposta: 'Teste resposta' })
})

app.get('/tradutorInglesPortugues', (req, res) => {
    res.json({ resposta: 'Teste resposta' })
})

app.get('/imagemOcr', async (req, res) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('imageUrl', 'https://cdn.pensador.com/img/imagens/pe/ns/pensador_mensagens_de_fe_01.jpg');
    const options = {
        method: 'POST',
        url: 'https://image-to-text-ocr1.p.rapidapi.com/ocr',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host': 'image-to-text-ocr1.p.rapidapi.com'
        },
        data: encodedParams,
    }
    try {
        const response = await axios.request(options)
        console.log(response.data.text)
        res.json({texto: response.data.text})
    } catch (error) {
        console.error(error)
    }
})

app.get('/artistasPrincipais', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://billboard-api2.p.rapidapi.com/hot-100',
        params: {
            date: '2019-05-11',
            range: '1-10'
        },
        headers: {
            'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host': 'billboard-api2.p.rapidapi.com'
        }
    }

    try {
        const response = await axios.request(options)

        console.log(response.data)
        res.json({ lista: response.data })
    } catch (error) {
        console.error(error)
        res.json({ mensagem: 'Não deu certo' })
    }
})

//Ouvinte de requisições
app.listen(3000)