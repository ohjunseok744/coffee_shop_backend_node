import express from 'express';
import { verifyToken, verifyTokenAdmin } from '../verifyToken.js'; // 올바른 경로로 수정
import { addOrder, updateOrder, deleteOrder, getSingleOrder, getAllOrders, getOrderIncome } from '../controllers/order.js'; // controllers/order 경로 확인

const router = express.Router();

// New Order
router.post("/", verifyToken, addOrder);

// Edit or update order
router.put("/:id", verifyTokenAdmin, updateOrder);

// Delete
router.delete("/:id", verifyTokenAdmin, deleteOrder);

// Get a user order
router.get("/find/:userId", verifyToken, getSingleOrder);

// Get ALL orders
router.get("/", verifyTokenAdmin, getAllOrders);

// Get monthly income
router.get("/income", verifyTokenAdmin, getOrderIncome);

export default router;
