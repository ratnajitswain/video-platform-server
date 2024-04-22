import mongoose, { Document, Schema } from 'mongoose';

interface User extends Document {
    email:string,
    name:string,
    phone:number,
    password:string,
}

const userSchema = new Schema<User>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
