import express, { Router, Request, Response } from 'express';
import {IUser, User} from '../models/user';
import jwt, {JwtPayload} from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
dotenv.config();
const userRouter: Router = express.Router();

interface UserRequestBody {
    username: string;
    password: string;
  }

userRouter.get('/', (req: Request, res: Response) => {
    res.json('Hello from user router');
});
userRouter.post('/register', (req: Request<{}, {}, UserRequestBody>, res: Response) => { // to be added validation and hashing
    const {username, password} = req.body;
    if (!username || !password) {
        res.status(400).json('Please provide username and password');
    }
    try {
        const hash : string = bcrypt.hashSync(password, 10);

        const user: IUser = new User({
        username: username,
        password: hash
        });
        user.save()
        res.json({msg: "user created"})
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error');
    }     
})
userRouter.post('/login', async (req: Request<{}, {}, UserRequestBody>, res: Response) => { //Cookie “token” will soon be rejected because it is foreign and does not have the “Partitioned“ attribute. from browser warning
    const {username, password} = req.body; // https://stackoverflow.com/questions/78497879/cookie-will-soon-be-rejected-because-it-is-foreign-and-does-not-have-the-partit
    if (!username || !password) {
        res.status(400).json('Please provide username and password');
    }

    
    try {
        const user: IUser|null = await User.findOne({username: username});
        if (!user) {
            res.status(400).json('No user found');
        }
        else{
            const validPassword: boolean = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                res.status(400).json('Invalid password');
            }else{
                const token: string = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true,secure: true, sameSite: 'none', });
                res.status(200).json({ message: 'User logged in successfully.', token });
            }
            
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error');
    }     
})
userRouter.post('/logout', (req: Request, res: Response) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: true, // set to true if using HTTPS
        sameSite: 'none',
      });
      res.status(200).send({ message: 'Logout successful' });
  });


export default userRouter;