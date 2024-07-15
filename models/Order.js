import mongoose from "mongoose"; // mongoose 라이브러리 가져오기

// OrderSchema 정의
const OrderSchema = new mongoose.Schema(
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
          required: true, // 필수 입력 필드
        },
        quantity: {
          type: Number,   // 데이터 타입: 숫자
          required: true, // 필수 입력 필드
          default: 1,     // 기본값: 1
        },
      }
    ],
    // 주문 금액 필드
    amount: {
      type: Number,       // 데이터 타입: 숫자
      required: true,     // 필수 입력 필드
    },
    // 배송 주소 필드
    address: {
      type: Object,       // 데이터 타입: 객체
      required: true,     // 필수 입력 필드
    },
    // 주문 상태 필드
    status: {
      type: String,       // 데이터 타입: 문자열
      default: "pending", // 기본값: "pending"
    },
  },
  { timestamps: true }    // 생성 및 수정 시간을 자동으로 기록
);

// Order 모델 생성 및 내보내기
export default mongoose.model("Order", OrderSchema);
