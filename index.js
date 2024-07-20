import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import cartRouter from './routes/carts.js';
import orderRouter from './routes/orders.js';
import productRouter from './routes/products.js';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
})
  .then(() => {
    app.listen(8000, () => console.log("Server Running on port: 8000"));
  })
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/products", productRouter);
