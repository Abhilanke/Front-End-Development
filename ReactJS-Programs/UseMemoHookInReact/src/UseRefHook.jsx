import { useEffect, useMemo, useRef, useState } from "react";
//loading slow then use UseMemo

function UseRefHook() {
  let [count, setCount] = useState(0);
  let myvar = useRef(0);

  function handleOnClick() {
    setCount(count + 1);
    myvar.current = myvar.current + 1;
  }

  return (
    <>
      <button className="btn btn-secondary mb-2" onClick={handleOnClick}>
        CLick
      </button>
      <div className="mb-5">Count {count} </div>

      <div className="mb-2">local variable's value {myvar.current}</div>
    </>
  );
}
export default UseRefHook;
