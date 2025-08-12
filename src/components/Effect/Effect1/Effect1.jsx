import { useEffect, useState } from "react";

function Effect1() {
  const [h1Name, setH1Name] = useState("");
  const [name, setName] = useState("");

  const [h1Age, setH1Age] = useState("");
  const [age, setAge] = useState("");

  const nameOnChanegeHandler = (e) => {
    setName(e.target.value);
  };

  const ageOnChanegeHandler = (e) => {
    setAge(e.target.value);
  };

  const nameOnClickHandler = () => {
    setH1Name(name);
    // set 함수는 즉시 실행이 아님
    // 이벤트 핸들러 함수가 모두 끝나면, h1Name의 값을 name의 값으로 바꿔서 다시 컴포넌트를 랜더링 해달라고 예약해두는 것

    // console.log(h1Name);

    // 리액트는 일괄 처리
    // 싱테 업데이트 요청이 들어오면 모여서 한 번에 처리
    // 만약 set 함수를 즉시 처리하면 작은 변화에도 컴포넌트를 다시 랜더링하기 때문에 느려짐
  };

  const ageOnClickHandler = () => {
    setH1Age(age);
    // console.log(h1Age);
  };

  useEffect(() => {
    console.log("마운트 됨");
    console.log(h1Name);
    console.log(h1Age);

    return () => {
      console.log("언마운트 됨");
    }
  }, [h1Name, h1Age]);

  return (
    <div>
      <h1>이름: {h1Name}</h1>
      <h1>나이: {h1Age}</h1>
      <input type="text" onChange={nameOnChanegeHandler}/>
      <button onClick={nameOnClickHandler}>이름 확인</button>
      <input type="text" onChange={ageOnChanegeHandler}/>
      <button onClick={ageOnClickHandler}>나이 확인</button>
    </div>
  );
}

export default Effect1;