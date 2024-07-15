커피 쇼핑몰 백엔드 (Node.js)
이 프로젝트는 Node.js, Express, MongoDB를 사용하여 제작된 커피 쇼핑몰 웹 애플리케이션의 백엔드입니다. 사용자 인증, 제품 관리, 주문 관리 등을 처리합니다.

주요 기능
사용자 인증 (회원가입, 로그인)
사용자 관리 (업데이트, 삭제, 사용자 정보 조회, 모든 사용자 조회)
제품 관리 (CRUD 작업)
주문 관리 (CRUD 작업)
JWT 기반 인증
CORS 지원
bcrypt를 사용한 안전한 비밀번호 저장
dotenv를 사용한 환경 설정
사전 준비 사항
다음 소프트웨어가 설치되어 있는지 확인하세요:

Node.js (v14 이상)
npm 또는 yarn
MongoDB 인스턴스 (로컬 또는 클라우드)
설치 방법
저장소를 클론합니다:

bash
코드 복사
git clone https://github.com/yourusername/coffee_shop_backend_node.git
cd coffee_shop_backend_node
의존성을 설치합니다:

bash
코드 복사
npm install
# 또는
yarn install
루트 디렉토리에 .env 파일을 생성하고 환경 변수를 추가합니다:

env
코드 복사
MONGO_URI=your_mongodb_connection_string
JWT_KEY=your_jwt_secret_key
PORT=8000
서버를 시작합니다:

bash
코드 복사
npm start
# 또는
yarn start
서버가 http://localhost:8000에서 시작됩니다.