import express, { Router, Request, Response } from 'express';
const userRouter: Router = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello from MongoDB');
});


export default userRouter;