import mongoose from "mongoose"; // mongoose 라이브러리 가져오기

// ProductSchema 정의
const ProductSchema = new mongoose.Schema(
  {
    // 제품 제목 필드
    title: {
      type: String,       // 데이터 타입: 문자열
      required: true,     // 필수 입력 필드
      unique: true,       // 고유 값
    },
    // 제품 설명 필드
    desc: {
      type: String,       // 데이터 타입: 문자열
      required: true,     // 필수 입력 필드
    },
    // 이미지 URL 필드
    img: {
      type: String,       // 데이터 타입: 문자열
      required: true, 
    },
    // 카테고리 필드
    categories: {
      type: Array,     // 데이터 타입: 문자열 배열
    },
    // 크기 필드
    size: {
      type: Array,       // 데이터 타입: 문자열
    },
    color:{
      type:Array,
    },
    price:{
      type:Number,
      required :true,
    },
    inStock:{
      type:Boolean,
      default:true,
    }
  },
  { timestamps: true }    // 생성 및 수정 시간을 자동으로 기록
);

// Product 모델 생성 및 내보내기
export default mongoose.model("Product", ProductSchema);
