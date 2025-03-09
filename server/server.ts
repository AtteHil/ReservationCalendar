import express, { Express } from 'express';
import mongoose, { Connection } from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import reservationRouter from './routes/reservations';
import userRouter from './routes/user';
dotenv.config();
const app: Express = express();
const port: number = parseInt(process.env.PORT as string) || 3000;
const mongoUri: string = process.env.MONGO_URI as string;
const allowedOrigins = ['http://localhost:5173', 'https://reservation-calendar-psi.vercel.app/'];
mongoose.connect(mongoUri);
mongoose.Promise = Promise;
const db: Connection = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error'));
app.use(cors({
    origin: allowedOrigins,
    credentials: true,
  }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/reservation', reservationRouter);
app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
