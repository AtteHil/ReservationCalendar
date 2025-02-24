import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
    username: string;
    password: string;

}

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}

})

const User: mongoose.Model<IUser> = mongoose.model<IUser>("User", userSchema)

export { User, IUser}