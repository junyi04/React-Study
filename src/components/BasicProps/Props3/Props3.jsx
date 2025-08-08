/**
 * 자식 요소 전달법
 * 1. props 속성을 사용
 * 2. props에 내장되어 있는 children 속성 이용
 */

function Props3({ ch1, children }) {
  // const ch1 = <div>자식요소1</div>;
  return (
    <div>{children}</div>
  );
}

export default Props3;