const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.get('/login', (req, res) => {
    try {
        res.sendFile(__dirname + '/public/index.html')
    } catch (error) {
        res.sendFile(__dirname + '/public/erro.html')
    }
})

app.post('/validaLogin', (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

app.delete('/usuario', (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

app.listen(3000)