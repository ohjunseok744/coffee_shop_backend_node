import express from 'express';
import { verifyToken, verifyTokenAdmin }  from '../middleware/verifyToken.js'; // verifyToken 모듈 가져오기
import { updateUser, deleteUser, getSingleUser, getAllUsers, getUserStats } from '../controllers/user.js'; // 컨트롤러 함수들 가져오기

const router = express.Router();

// Update
router.put("/:id", verifyToken, updateUser);

// Delete
router.delete("/:id", verifyToken, deleteUser);

// Get Single User
router.get("/find/:id", verifyToken, getSingleUser);

// Get All Users
router.get("/", verifyTokenAdmin, getAllUsers);

// Get User Stats
router.get("/stats", verifyTokenAdmin, getUserStats);

export default router;
