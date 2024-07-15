import jwt from 'jsonwebtoken'; // jsonwebtoken 라이브러리 가져오기

const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token; // 쿠키에서 토큰 가져오기
  if (!token) return res.status(401).json("Not Authenticated..."); // 토큰이 없으면 인증되지 않았음을 응답

  jwt.verify(token, process.env.JWT_KEY, (err, user) => { // 토큰 검증
    if (err) return res.status(403).json("Token is not valid..."); // 토큰이 유효하지 않으면 응답
    req.user = user; // 검증된 사용자를 요청 객체에 추가
    next(); // 다음 미들웨어로 이동
  });
};

export default verifyToken; // verifyToken 함수 내보내기
