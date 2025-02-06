import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
