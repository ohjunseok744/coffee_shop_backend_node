// import express from 'express';
// import { verifyToken, verifyTokenAdmin } from '../middleware/verifyToken.js';
// import { addProduct, updateProduct, deleteProduct, getProduct, getAllProducts } from '../controllers/product.js';
// import upload from '../middleware/upload.js';
// const router = express.Router();

// // New Product
// router.post("/", (req, res, next) => {
//   upload.single('img')(req, res, (err) => {
//     if (err instanceof multer.MulterError) {
//       // Multer 에러 처리
//       return res.status(400).json({ message: err.message });
//     } else if (err) {
//       // 알 수 없는 에러 처리
//       return res.status(500).json({ message: 'An unknown error occurred when uploading.' });
//     }
//     // 파일 업로드 성공, 다음 미들웨어로 진행
//     next();
//   });
// }, addProduct);
// // Edit or update product
// router.put("/:id", verifyTokenAdmin,upload.single('image'), updateProduct);

// // Delete product
// router.delete("/:id", verifyTokenAdmin, deleteProduct);

// // Get a single product
// router.get("/find/:id", getProduct);

// // Get all products
// router.get("/", getAllProducts);

// export default router;
