import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function Index() {
  // 로직상 문제가 없지만 성능 상 부하가 일어날 수 있음.
  // 랜더링될 때마다 계속 get을 함.
  // const [todoList, setTodoList] = useState(
  //   JSON.parse(localStorage.getItem("todoList"))
  //     ? JSON.parse(localStorage.getItem("todoList"))
  //     : []
  // );

  // 위의 사항을 보안하기 위해 함수로 재처할 수 있음.
  // 기본 값에 return된 값이 들어감. useEffect와 동일한 효과낼 수 있음.
  const [todoList, setTodoList] = useState(() => {
    const localStorageTodoList = localStorage.getItem("todoList");
    return localStorageTodoList ? JSON.parse(localStorageTodoList) : [];
  });

  // useEffect 사용시 초기 빈배열 배치
  // const [todoList, setTodoList] = useState([]);

  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  // useEffect는 최초 마운트 한 번만 호출해서 성능이 좋음.
  // 이 코드에서는 위의 함수로 한 번에 처리하겠음.
  // useEffect(() => {
  //   let localStorageTodoList = localStorage.getItem("todoList");
  //   if (!localStorageTodoList) {
  //     localStorage.setItem("todoList", JSON.stringify([]));
  //     localStorageTodoList = [];
  //     setTodoList(localStorageTodoList);
  //   } else {
  //     setTodoList(JSON.parse(localStorageTodoList));
  //   }
  // }, []);

  useEffect(() => {
    let localStorageTodoList = localStorage.getItem("todoList");
    const todoListJson = JSON.stringify(todoList);
    if (localStorageTodoList !== todoListJson) {
      localStorage.setItem("todoList", todoListJson);
    }
  }, [todoList]);

  const filterTodoList = todoList.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "complete") {
      return todo.isComplete;
    } else if (filter === "incomplete") {
      return !todo.isComplete;
    }
  }).filter(todo => {
    if (searchText.trim().length === 0) {
      return true;
    }
    return todo.content.includes(searchText);
  });
  
  return (
    <Layout
      filter={filter}
      setFilter={setFilter}
      setSearchText={setSearchText}
    >
      <Main todoList={filterTodoList} setTodoList={setTodoList} />
    </Layout>
  );
}

export default Index;