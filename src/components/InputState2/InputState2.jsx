import { useState } from "react";

function InputState2() {

  const [inputValue, setInputValue] = useState({
    t1: "",
    t2: "",
    t3: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newInputValue = {
      ...inputValue,
      [name]: value,
    };
    // ...을 쓰는 이유 -> t1을 입력해놓고 t2를 넣을 때, 이전 t1 입력값을 그대로 들고 오고 t2를 입력하도록 만들어줌.
    // 객체 안에서 대괄호를 쓰면, 변수 안에 들어있는 문자열 값을 키로 사용할 수 있음.
    // [] 안 쓰면 key 이름이 name이 됨. [] 쓰면 메인 변수(t1, t2, t3)가 가지고 있는 값을 키로 씀.

    setInputValue(newInputValue);
  };

  return (
    <div>
      <h1>{inputValue.t1}</h1>
      <h1>{inputValue.t2}</h1>
      <h1>{inputValue.t3}</h1>
      <input
        name="t1"
        type="text"
        onChange={onChangeHandler}
      />
      <input
        name="t2"
        type="text"
        onChange={onChangeHandler}
      />
      <input
        name="t3"
        type="text"
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default InputState2;