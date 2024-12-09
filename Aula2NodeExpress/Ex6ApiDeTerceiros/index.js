//Imports gerais
const express = require('express')
const app = express()
const axios = require('axios')
const dotenv = require('dotenv').config()

app.get('/perguntaChat', async (req, res) => {
    const axios = require('axios');

    const options = {
        method: 'GET',
        url: 'https://ai-chatbot.p.rapidapi.com/chat/free',
        params: {
            message: 'How many days have a year?',
            uid: 'user1'
        },
        headers: {
            'X-RapidAPI-Key': process.env.X_RapidAPI_Key,
            'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data)
        res.json({mensagem: response.data.chatbot.response})
    } catch (error) {
        console.error(error);
    }
})

app.get('/tradutorInglesPortugues', (req, res) => {
    res.json({ resposta: 'Teste resposta' })
})

app.get('/imagemOcr', async (req, res) => {
    const encodedParams = new URLSearchParams();
    const endereco2 = 'https://www.graficacanoas.com/uploads/produtos/placa-de-aviso-deixar-o-salao-limpo-retangular-25cm-x-18cm-35cm-x-25cm-50cm-x-35cm-pvc-2mm-impressao-digital-4-furos-ou-fita-dupla-face-4x0-colorido-frente-verniz-de-protecao1568048591.jpg'
    const endereco1 = 'https://images.tcdn.com.br/img/img_prod/1040648/placa_aviso_acesso_restrito_453_1_b4628521a623f1f8c4c95542b767689c.jpg'
    const endereco3 = 'https://i.pinimg.com/originals/d0/29/aa/d029aa09109bef67626f5aea42ba0c75.png'
    encodedParams.set('imageUrl', endereco3);
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
        res.json({ texto: response.data.text })
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