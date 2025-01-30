import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  const [typeCount, setTypeCount] = useState(0);

  function Adding() {
    setCount(count + 1);
  }

  function handleTyping(event) {
    const value = event.target.value;
    setType(value);
    setTypeCount(value.length);
  }

  return (
    <>
      <h1>Working with useState</h1>
      <input type="text" onChange={handleTyping} value={type} />
      <p>Typing : {type}</p>
      <p>Text Count: {typeCount}</p>
      <h3>Count</h3>
      <p>Click Count: {count}</p>
      <button onClick={Adding}>+</button>
    </>
  );
}

export default UseState;
