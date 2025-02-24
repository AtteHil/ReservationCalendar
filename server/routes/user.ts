import express, { Router, Request, Response } from 'express';
import {IUser, User} from '../models/user';
const userRouter: Router = express.Router();

userRouter.get('/', (req: Request, res: Response) => {
    res.json('Hello from user router');
});
userRouter.post('/register', (req: Request, res: Response) => { // to be added validation and hashing
    const {username, password} = req.body;
    if (!username || !password) {
        res.status(400).json('Please provide username and password');
    }
    try {
        const user: IUser = new User({
        username: username,
        password: password
        });
        user.save()
        res.json({msg: "user created"})
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error');
    }     
})
userRouter.post('/login', async (req: Request, res: Response) => {
    const {username, password} = req.body;
    if (!username || !password) {
        res.status(400).json('Please provide username and password');
    }
    try {
        const user: IUser|null = await User.findOne({username: username, password: password});
        if (!user) {
            res.status(400).json('Invalid credentials');
        }
        else{
            res.json({msg: "user logged in"}) // to be added jwt sign and token return
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error');
    }     
})


export default userRouter;