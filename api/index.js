import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import UserRouter from './routes/user.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Coonected To MongoDB")
  }).catch((err)=>{
    console.log(err);
})


const app = express();


app.use('/api/user',UserRouter);


app.listen(3000,()=>{
    console.log("Server running on 3000");
})