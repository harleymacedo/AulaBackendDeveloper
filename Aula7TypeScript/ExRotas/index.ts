import express, { Request, Response } from 'express'
import path from 'path'

const app = express()

type Time = {
  id: number
  nome: string
  cidade: string
}

const times: Time[] = [
  { id: 1, nome: 'Flamengo', cidade: 'Crato' },
  { id: 2, nome: 'Palmeiras', cidade: 'Juazeiro' },
  { id: 3, nome: 'Botafogo', cidade: 'Crato' },
  { id: 4, nome: 'Bahia', cidade: 'Barbalha' },
  { id: 5, nome: 'Santos', cidade: 'Crato' },
]

app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'))
})

app.get('/times', (req: Request, res: Response) => {
  res.json(times)
})

app.get('/infosReqRes', (req: Request, res: Response) => {
  const infos: string[] = []
  for (const atrib in req) {
    infos.push(atrib)
  }
  res.json({ infos })
})

app.get('/times/:cidade', (req: Request, res: Response) => {
  const cidade = req.params.cidade
  const timesCidade = times.filter(time => time.cidade === cidade)
  res.json(timesCidade)
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
