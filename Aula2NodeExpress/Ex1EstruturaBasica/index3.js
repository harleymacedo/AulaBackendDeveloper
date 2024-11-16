const express = require('express')
const app = express()
const times = [
  {id: 1, nome: 'Flamengo', cidade: 'Crato'},
  {id: 2, nome: 'Palmeiras', cidade: 'Juazeiro'},
  {id: 3, nome: 'Botafogo', cidade: 'Crato'},
  {id: 4, nome: 'Bahia', cidade: 'Barbalha'},
  {id: 5, nome: 'Santos', cidade: 'Crato'},
]

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/home.html')
})

app.get('/times', function (req, res) {
  res.json(times)
})

app.get('/infosReqRes', function (req, res) {
  let infos = []
  for (const atrib in req) { infos.push(atrib) }
  res.json({'infos': infos})
})

app.get('/times/:cidade', function (req, res) {
  let cidade = req.params.cidade
  let timesCidade = times.filter(function (time){
    return time.cidade === cidade
  } )
  res.json(timesCidade)
})

app.listen(3000)