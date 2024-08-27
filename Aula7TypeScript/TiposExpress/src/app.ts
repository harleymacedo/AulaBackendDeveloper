import express from 'express';
import {Router, Request, Response} from 'express';

const app = express();
const route = Router();

app.use(express.json());
app.use(route);

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'Resposta com Typescript'});
});

app.listen(3000, () => 'Servidor rodando na porta 3000');