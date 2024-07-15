import express from 'express'; // express 라이브러리 가져오기
import {register,login} from '../controllers/auth.js';

const router = express.Router(); // 라우터 객체 생성

// 기본 경로에 대한 GET 요청 처리
router.post("/register",register);

router.post("/login",login);
export default router; // 라우터 객체 내보내기
