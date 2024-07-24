import express from 'express';
import { verifyToken, verifyTokenAdmin } from '../middleware/verifyToken.js';
import { addCart, updateCart, deleteCart, getCart,getAllCarts } from '../controllers/cart.js';
const router = express.Router();

// Create
router.post("/", verifyToken, addCart);

// Update
router.put("/:id", verifyToken, updateCart);

// Delete
router.delete("/:id", verifyToken, deleteCart);

// Get user cart
router.get("/find/:userId", verifyToken, getCart);

// Get ALL carts
router.get("/", verifyTokenAdmin, getAllCarts);

export default router;
