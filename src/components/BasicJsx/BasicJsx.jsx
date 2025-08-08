/**
 * Jsx?
 * 자바스크립트와 HTML을 결합한 문법
 */

function BasicJsx() {
  // 1. 태그가 열리면 꼭 닫기
  const jsx1 = (
    <div>
      <p>JSX의 특징</p>
        <input type="text" />
      </div>
  )

  // 2. 두 개 이상의 태그는 하나의 태그로 감싸기
  const jsx2 = (
    <div>
      <div></div>
      <div></div>
    </div>
  )

  // 3. 변수, 상수, 리스트, 값 등을 표현하려면 {}로 감싸서 표현하기
  // 단, 자바스크립트 표현식만 들어갈 수 있음.
  // if, for, while 등 대신에 map, filter, 삼항연산자 등을 사용
  const name = "강준이";
  const age = 22;
  const jsx3 = (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{age > 20 ? "성인" : "미성년자"}</h3>
    </div>
  )

  // 4. 2번에서 두 개 이상의 태그는 하나로 감싸야한다고 함.
  // 이때, 그룹을 위해 만들어진 태그가 있음.
  const jsx4 = (
    <>
      <div></div>
      <div></div>
    </>
  )

  const jsx5 = (
    <>
      <div></div>
      <div></div>
    </>
  )

  const jsx6 = (
    <>
      {jsx4}
      {jsx5}
    </>
  )

  const nameList = [
    <div>강준일</div>,
    <div>강준이</div>,
    <div>강준삼</div>,
    <div>강준사</div>
  ]

  const nameList2 = [
    <div>
      {jsx1}
      {jsx3}
      {jsx4}
    </div>
  ]

  return (
    <div>
      {jsx1}
      {jsx2}
      {jsx3}
      {jsx6}
      {nameList}
      {nameList2}
    </div>
  )
}

export default BasicJsx