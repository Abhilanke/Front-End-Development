import { useEffect, useMemo, useState } from "react";
//loading slow then use UseMemo
function UseMemoHook() {
  let [count, setCount] = useState(0);
  let myvar = 10;
  function testReload(data) {
    console.log("inside expensive function......");
    for (let i = 1; i < 1000000000; i++) {}
    return data + 1;
  }
  // testReload();
  let result = useMemo(() => testReload(myvar), [myvar]);

  return (
    <>
      <button className="btn btn-secondary" onClick={() => setCount(count + 1)}>
        Increase count
      </button>
      <div>You have clicked {count} times</div>

      <div>local variable's value {result}</div>
    </>
  );
}
export default UseMemoHook;
