import mongoose from "mongoose"; // mongoose 라이브러리 가져오기

// UserSchema 정의
const UserSchema = new mongoose.Schema(
  {
    // 사용자 이름 필드
    username: {
      type: String,       // 데이터 타입: 문자열
      required: true,     // 필수 입력 필드
      unique: true,       // 고유 값
    },
    // 이메일 필드
    email: {
      type: String,       // 데이터 타입: 문자열
      required: true,     // 필수 입력 필드
      unique: true,       // 고유 값
    },
    // 비밀번호 필드
    password: {
      type: String,       // 데이터 타입: 문자열
      required: true,     // 필수 입력 필드
    },
    // 관리자 여부 필드
    isAdmin: {
      type: Boolean,      // 데이터 타입: 불리언
      default: false,     // 기본값: false
    },
    // 이미지 URL 필드
    img: {
      type: String,       // 데이터 타입: 문자열
    }
  },
  { timestamps: true }    // 생성 및 수정 시간을 자동으로 기록
);

// User 모델 생성 및 내보내기
export default mongoose.model("User", UserSchema);
