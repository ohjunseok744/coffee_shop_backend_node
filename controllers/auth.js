import User from '../models/User.js'; // User 모델 가져오기
import jwt from 'jsonwebtoken'; // jsonwebtoken 라이브러리 가져오기
import bcrypt from 'bcryptjs';
// 회원가입 처리 함수
export const register = async (req, res) => {
  try {
    // 비밀번호 해시화를 위한 salt 생성
    const salt = await bcrypt.genSalt(10);
    // 해시화된 비밀번호 생성
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // 새로운 사용자 객체 생성
    const newUser = new User({
      username: req.body.username, // 요청 본문에서 사용자 이름 가져오기
      email: req.body.email,       // 요청 본문에서 이메일 가져오기
      password: hashedPassword,    // 해시화된 비밀번호 저장
      isAdmin: req.body.isAdmin,   // 요청 본문에서 관리자 여부 가져오기
    });

    // 사용자 객체를 데이터베이스에 저장
    const savedUser = await newUser.save();

    // 저장된 사용자 정보에서 비밀번호를 제외한 나머지 정보 추출
    const { password, ...userInfo } = savedUser._doc;

    // 상태 코드 200과 함께 사용자 정보를 응답
    res.status(200).json(userInfo);
  } catch (err) {
    // 오류 발생 시 상태 코드 500과 함께 오류 메시지 응답
    res.status(500).json(err);
  }
};


// 로그인 처리 함수
export const login = async (req, res) => {
  try {
    // 사용자를 사용자 이름으로 찾기
    const user = await User.findOne({
      username: req.body.username
    });
    
    // 사용자가 없으면 404 상태 코드와 메시지 반환
    if (!user) return res.status(404).json("User not found....");

    // 비밀번호 확인
    const verifyPassword = await bcrypt.compare(req.body.password, user.password);
    if (!verifyPassword) return res.status(400).json("Wrong credentials");

    // 비밀번호를 제외한 사용자 정보와 JWT 토큰 생성
    const { password, ...userInfo } = user._doc;
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
    res.cookie("access_token",token,{
      httpOnly:true,
    })    // 사용자 정보와 토큰 응답
    .status(200).json(userInfo);
  } catch (err) {
    // 오류 발생 시 500 상태 코드와 메시지 반환
    res.status(500).json(err);
  }
};
