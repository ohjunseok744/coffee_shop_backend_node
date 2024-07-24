import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import cartRouter from './routes/carts.js';
import orderRouter from './routes/orders.js';
import productRouter from './routes/products.js';

dotenv.config();

const app = express();

// CORS 설정
app.use(cors({
  origin: 'http://localhost:5173', // 클라이언트 도메인
  credentials: true, // 쿠키를 포함한 요청을 허용
}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
})
  .then(() => {
    app.listen(8000, () => console.log("Server Running on port: 8000"));
  })
  .catch(err => console.log(err));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);
