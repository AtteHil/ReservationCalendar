import mongoose, { Document, Schema } from "mongoose";

interface IReservation extends Document {
    user: string;
    days: Date[];
    cats: string[];

}

const reservationSchema = new Schema({
    user: { type: String, required: true },
    days: { type: [Date], required: true },
    for: { type: [String], required: true },

})

const Reservation: mongoose.Model<IReservation> = mongoose.model<IReservation>("Reservation", reservationSchema)

export { Reservation, IReservation }