import { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  function Adding() {
    setCount(count + 1);
  }
  useEffect(() => {
    document.title = `Click Count ${count} times`;
  });

  return (
    <>
      <h1>Working with useEffect</h1>
      <p>Click Count: {count}</p>
      <button onClick={Adding}>Click hare!{""}</button>
    </>
  );
}

export default UseEffect;
