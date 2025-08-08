function Props1(props) {
  console.log(props)
  const { a, b } = props;

  // 비구조할당 (구조분해)
  return (
    <div>
      <p>a라는 데이터 - {a}</p>
      <p>b라는 데이터 = {b}</p>
    </div>
  );
}

export default Props1;