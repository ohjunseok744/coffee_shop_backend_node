import mongoose from "mongoose"; // mongoose 라이브러리 가져오기

// CartSchema 정의
const CartSchema = new mongoose.Schema(
  {
    // 사용자 ID 필드
    userId: {
      type: String,       // 데이터 타입: 문자열
      required: true,     // 필수 입력 필드
    },
    // 제품 목록 필드
    products: [
      {
        productId: {
          type: String,   // 데이터 타입: 문자열
        },
        quantity: {
          type: Number,   // 데이터 타입: 숫자
          default: 1,     // 기본값: 1
        },
      }
    ],
  },
  { timestamps: true }    // 생성 및 수정 시간을 자동으로 기록
);

// Cart 모델 생성 및 내보내기
export default mongoose.model("Cart", CartSchema);
