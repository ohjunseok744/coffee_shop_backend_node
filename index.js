import express from "express";
import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from 'cookie-parser'; // cookie-parser 가져오기
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(app.listen(8000,console.log("Server Running on port:8000")))
  .catch(err => console.log(err));
app.use(cors());
app.use(express.json());
app.use(cookieParser()); // 쿠키 파싱 미들웨어 설정
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);
