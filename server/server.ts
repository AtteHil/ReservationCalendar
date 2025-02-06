import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({msg:'Hello, TypeScript!'});
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
