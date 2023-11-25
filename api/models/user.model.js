import mongoose from "mongoose";

//scheme
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
  }, 
 {timestamps: true}
);

//model
const User = mongoose.model('User',userSchema);

export default User;