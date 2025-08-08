import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState(0);

  const onClickHandler = (e) => {
    console.log(e.target.value);
    const clickedValue = e.target.value;

    if (input === "0" && (clickedValue === "+" || clickedValue === "-")) {
    return;
  }

    const lastChar = input.charAt(input.length - 1);
    if ((lastChar === "+" || lastChar === "-") && (clickedValue === "0" || clickedValue === "+" || clickedValue === "-")) {
      return;
    }


    if (clickedValue === "=") {
      setOutput(eval(input));
      setInput("0");
      return;
    }

    if (clickedValue === "r") {
      if (input.length == 1) {
        setInput("0");
        return;
      }
      setInput(input.slice(0, -1));
      return;
    }

    if (input === "0") {
      setInput(clickedValue);
    }
    else {
      setInput(input + clickedValue);
    }
  };

  return (
    <div>
      <h1>입력: {input}</h1>
      <h1>결과: {output}</h1>
      <div>
        <button value={0} onClick={onClickHandler}>0</button>
        <button value={"r"} onClick={onClickHandler}>←</button>
      </div>
      <div>
        <button value={1} onClick={onClickHandler}>1</button>
        <button value={2} onClick={onClickHandler}>2</button>
        <button value={3} onClick={onClickHandler}>3</button>
      </div>
      <div>
        <button value={4} onClick={onClickHandler}>4</button>
        <button value={5} onClick={onClickHandler}>5</button>
        <button value={6} onClick={onClickHandler}>6</button>
      </div>
      <div>
        <button value={7} onClick={onClickHandler}>7</button>
        <button value={8} onClick={onClickHandler}>8</button>
        <button value={9} onClick={onClickHandler}>9</button>
      </div>
      <div>
        <button value={"="} onClick={onClickHandler}>=</button>
        <button value={"+"} onClick={onClickHandler}>+</button>
        <button value={"-"} onClick={onClickHandler}>-</button>
      </div>
    </div>
  );
}

export default Calculator