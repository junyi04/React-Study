/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as s from "./styles";
import { IoIosTrash } from "react-icons/io";

function Main({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  // Enter가 아니면 다 무시
  const onKeyDownHandler = (e) => {
    if (e.keyCode !== 13) {
      return;
    }
    if (inputValue.trim().length === 0) {
      return;
    }

    // Index에 있던 setTodoList를 인자로 넘겨받았음
    // id가 필요한데 id는 마지막 요소 이후에 넣어야 함
    // 길이가 0이면 바로 시작하고, 아니면 배열의 마지막 요소의 아이디를 가져옴.
    // 가져와서 새로운 todo에 +1로 번호 매김
    setTodoList((prev) => {
      const lastId = prev.length === 0 ? 0 : prev[prev.length-1].id;
      const newTodo = {
        id: lastId + 1,
        isComplete: false,
        content: inputValue,
      };

      // prev에 새 투두를 넣어줌. 리액트 상태가 바뀌어서 재랜더링함.
      // 상태가 바뀜 = 참조 주소가 바뀜.
      return [...prev, newTodo];
    });

    setInputValue("");
  };

  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" id={`todo${todo.id}`} />
              <label htmlFor={`todo${todo.id}`}></label>
              <label htmlFor={`todo${todo.id}`}>
                {todo.content}
              </label>
              <div css={s.hiddenTrashBox}>
                <div css={s.trashBox}>
                  <IoIosTrash />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div css={s.todoInputContainer}>
        <input
          type="text"
          value={inputValue}
          placeholder="할 일을 입력하세요."
          onChange={inputOnChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </div>
  );
}

export default Main;