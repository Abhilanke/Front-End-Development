import { useState } from "react";

function UseMemoHook() {
  let [count, setCount] = useState(0);
  function newTask(num) {
    console.log("inside new Task function");
    for (let i = 0; i <= 100000000; i++) {}
    return num * 2;
  }
  let result = newTask(2);
  return (
    <>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        IncreseCount
      </button>
      <p>{result}</p>
    </>
  );
}
export default UseMemoHook;
