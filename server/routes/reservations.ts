import express, { Router, Request, Response } from 'express';
import { IReservation, Reservation } from '../models/reservation';
const reservationRouter: Router = express.Router();

reservationRouter.get('/', (req: Request, res: Response) => { // test route
    res.json('Hello from reservations');
});
// reservationRouter.post('/makeReservation', async (req: Request, res: Response) => { // commented out for production build, no authentication yet and I do not want to expose the endpoint
//     console.log(req.body);
//     try {
//         const { days, cats, food }: IReservation = req.body
//         const reservation: IReservation = new Reservation({
//             days,
//             cats,
//             food
//         })
//         await reservation.save()
//         res.status(200).json('Reservation made')
//     } catch (error: any) {
//         console.error(`Error: ${error}`)
//         res.status(500).json({ error: 'Internal Server Error' })
//     }
// })
reservationRouter.get('/getReservations', async (req: Request, res: Response) => { 
    try {
        const reservations: IReservation[] = await Reservation.find(); //add to return only future reservations
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