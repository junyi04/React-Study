import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users/1";
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }

// API로부터 사용자 데이터를 비동기적으로 받아오는 작업
function UserProfile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // async 함수로 내부에서 await를 이용해 비동기 작업을 동기적으로 처리하는 것처럼 작성
  const fetchUser = async() => {
    try {
      // API 주소로 HTTP 요청 보냄
      // await는 fetch가 완료될 때까지 기다림
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }

      // JSON 데이터를 파싱
      // await는 파싱이 완료될 때까지 기다림
      const responseData = await response.json();
      setUser(responseData); // 상태 저장

    } catch(error) { // 에러가 있으면 상태 메세지 저장
      setError(error.message);
    } finally {
      setIsLoading(false); // 로딩이 끝남
    }
  };

  // 컴포넌트가 처음 렌더링될 때 단 한 번 실행됨
  // [] 의존성 배열을 비웠기 때문
  useEffect(() => {
    fetchUser();
  }, []);

  // 데이터를 불러오는 중엔 이것만 띄움
  if (isLoading) {
    return <div>불러오는중...</div>
  };

  // 에러면 이것만 띄움
  if (error) {
    return <div>에러: {error}</div>
  }

  // 가져오면 이걸 띄움
  return (
    <div>
      {/* 고객 데이터가 있으면 띄우고 없으면 문구 띄움 */}
      {user ? (
        <div>
          <p>이름: {user.name}</p>
          <p>이메일: {user.email}</p>
          <p>전화번호: {user.phone}</p>
        </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
}

export default UserProfile;