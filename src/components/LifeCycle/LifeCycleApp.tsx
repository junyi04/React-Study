import { useState } from "react";
import LifeCycle from "./LifeCycle";

function LifeCycleApp() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>부모 컴포넌트</h1>
      <button onClick={() => setShow((prev) => !prev)}>{show ? "컴포넌트 숨기기 (언마운트)" : "컴포넌트 보이기 (마운트)"}</button>
      <button onClick={() => setCount((prev) => prev + 1)}>자식이 가지고 있는 카운트 앱 (재랜더링)</button>
      {show && <LifeCycle count={count}/>}
    </div>
  );
}

export default LifeCycleApp;