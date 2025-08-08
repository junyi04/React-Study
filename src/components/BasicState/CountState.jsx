import { useState } from "react";
import CountHeader from "./CountHeader/CountHeader";
import CountButton from "./CountButton/CountButton";

function CountState() {
  const [count, setCount] = useState(0);
  // let count = 0;

  const onClickHandler = (e) => {
    const num = parseInt(e.target.value);
    console.log("countState 랜더링");
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
      <CountHeader count={count} />
      <CountButton value={1} onClick={onClickHandler} text="+1" />
      <CountButton value={-1} onClick={onClickHandler} text="-1" />
    </div>
  );
}

/**
 * 리액트의 동작원리
 * 1. 가상돔 (Virtual DOM)
 * 우리가 실제로 보는 화면 돔이라는 트리구조로 관리,
 * 화면이 변화가 생길 때마다 이 실제 돔을 직접 조작하는 것은 비효율적
 * 실제 돔의 구조를 그대로 복사한 갓ㅇ 돔을 메모리에 만든다.
 * 상대에 변화가 생기면, 리액트는 실제 돔을 바로 건드리지 않고 메모리 새 가상돔을 만든다.
 * 이전 가상돔과 상태가 바뀐 새 가상돔과 비교하여 무엇이 바궈었는지 그 차이점을 빠르게 찾아냄.
 * 찾아낸 다음 변경된 부분만 모아서 실제 돔에게 이 부분만 바뀌었으니 여기만 좀 바꿔봐 라고 최종 업데이트를 요청
 * 
 * 2. 컴포넌트
 * 재사용이 가능한 레고 블럭
 * 재사용이 가능하도록 ui를 만들고 여러 조각으로 나누어서 관리하는데, 
 * 이 조각 하나하나를 컴포넌트라고 함.
 * 한 화면은 여러 컴포넌트들을 조합해서 합쳐서 하나의 화면을 만듦.
 * 
 */

export default CountState;