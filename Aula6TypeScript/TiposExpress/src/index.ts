import express from 'express';
import {Router, Request, Response} from 'express';

const app = express();
const route = Router();

app.use(express.json());
app.use(route);

route.get('/', (req: Request, res: Response) => {
    res.json({message: 'Hello World with Typescript'});
});

app.listen(3000, () => 'Server running on port 3000');