import mongoose, { Document, Schema } from "mongoose";

interface IReservation extends Document {
    days: [Date, Date];
    cats: string[];
    food: string;

}

const reservationSchema = new Schema({
    days: { type: [Date,Date], required: true },
    cats: {type: [String], required: true },
    food: { type: String, required: true },

})

const Reservation: mongoose.Model<IReservation> = mongoose.model<IReservation>("Reservation", reservationSchema)

export { Reservation, IReservation }