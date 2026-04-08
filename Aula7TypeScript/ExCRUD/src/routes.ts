import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'API funcionando' });
});

router.get('/users', (req: Request, res: Response) => {
  return res.json([
    { id: 1, name: 'João' },
    { id: 2, name: 'Maria' }
  ]);
});

export default router;