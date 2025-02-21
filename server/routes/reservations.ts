import express, { Router, Request, Response } from 'express';
import { IReservation, Reservation } from '../models/reservation';
const reservationRouter: Router = express.Router();

reservationRouter.get('/', (req: Request, res: Response) => {
    res.send('Hello from MongoDB');
});
reservationRouter.post('/makeReservation', async (req: Request, res: Response) => {
    console.log(req.body);
    try {
        const { user, days, cats }: IReservation = req.body
        const reservation: IReservation = new Reservation({
            user,
            days,
            cats
        })
        await reservation.save()
        res.status(200).send('Reservation made')
    } catch (error: any) {
        console.error(`Error: ${error}`)
        res.status(500).json({ error: 'Internal Server Error' })
    }

})
reservationRouter.get('/getReservations', async (req: Request, res: Response) => {
    try {
        const reservations: IReservation[] = await Reservation.find();
        if (reservations.length == 0) {
            res.status(203).json({ error: 'No reservations' })
        }
        else {
            res.json(reservations)
        }
    } catch (error: any) {
        console.error(`Error: ${error}`)
        res.status(500).json({ error: 'Internal Server Error' })
    }

});


export default reservationRouter;