import { useState } from "react";

function CountState() {
  const [count, setCount] = useState(0);
  // let count = 0;

  const onClickHandler = (e) => {
    const num = parseInt(e.target.value);
    setCount(num + count);
    // count + num;
    // console.log(count);
    // document.querySelector("h1").innerText = count;
  };

  /**
   * state란 컴포넌트가 가질 수 있는 상태를 의미
   * 이 state를 사용해서 컴포넌트가 렌더링될 때 데이터를 보유하고, 이 데이터를 업데이트 해서 화면을 다시 렌더링할 수 있음.
   * useState는 배열을 반환, 첫번째 요소가 현재 상태의 값, 두번째 요소가 상태를 업데이트해주는 함수를 반환.
   * 자동 재렌더링 되어 state 데이터들이 변경되면 html에도 자동적으로 변경사항이 적용됨.
   * 상태가 변경돼도 새로고침을 할 필요가 없어진다.
   */

  return (
    <div>
      <h1>{count}</h1>
      <button value={1} onClick={onClickHandler}>+1</button>
      <button value={-1} onClick={onClickHandler}>-1</button>
    </div>
  );
}

/**
 * 
 */

export default CountState;