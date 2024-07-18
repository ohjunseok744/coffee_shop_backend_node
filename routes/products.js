import express from 'express';
import { verifyToken, verifyTokenAdmin } from '../verifyToken.js';
import { addProduct, updateProduct, deleteProduct, getProduct, getAllProducts } from '../controllers/product.js';

const router = express.Router();

// New Product
router.post("/", verifyTokenAdmin, addProduct);

// Edit or update product
router.put("/:id", verifyTokenAdmin, updateProduct);

// Delete product
router.delete("/:id", verifyTokenAdmin, deleteProduct);

// Get a single product
router.get("/find/:id", getProduct);

// Get all products
router.get("/", getAllProducts);

export default router;
