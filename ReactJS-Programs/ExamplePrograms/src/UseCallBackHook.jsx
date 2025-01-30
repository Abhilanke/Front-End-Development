import { useCallback, useState } from "react";
import ChildComponant from "./ChildComponant";

function UseCallBackHook() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  });
  return (
    <>
      <h2>Working With UseCallBack</h2>
      <p>{count}</p>
      <button onClick={handleClick}>click!!</button>
      {/* <button
        onClick={() => {
          setcount(count + 1);
        },[]}
      >
        click!!
      </button> */}
      <br />
      <br />
      <div>
        <ChildComponant
          buttonname="AddCounter!"
          buttonClick={handleClick}
        ></ChildComponant>
      </div>
    </>
  );
}

export default UseCallBackHook;
