import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.route.js';
import UserRouter from './routes/user.route.js'

import cookieParser from 'cookie-parser';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Coonected To MongoDB")
  }).catch((err)=>{
    console.log(err);
})


const app = express();
app.use(express.json());
app.use(cookieParser())


//all these are middlewares
app.use('/api/user',UserRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });


app.listen(3000,()=>{
    console.log("Server running on 3000");
})