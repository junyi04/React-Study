import { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Strawberry",
  "Watermelon",
];

function FruitsFilter() {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFiltered] = useState(fruits);

  useEffect(() => {
    const newFiltered = fruits.filter((fruit) => 
      fruit.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFiltered(newFiltered);
  }, [inputValue]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {filtered.map((fruit, idx) => (
          <li key={idx}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsFilter;

// input 만들어서 ul 하나 만들고 input에 과일 이름을 검색해서 필터 거친 뒤 li로 출력
// 최초에는 전체 과일을 보여주고 내가 입력을 할 때마다 즉시 filter를 거쳐서 li로 보여주기