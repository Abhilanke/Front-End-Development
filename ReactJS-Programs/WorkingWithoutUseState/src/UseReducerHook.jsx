import { useReducer } from "react";
import reducer from "./reducer";
//const initalValue = 0;
function UseReducerHook() {
  const initalValue = 0;
  const [count, dispatch] = useReducer(reducer, initalValue);

  return (
    <>
      <h2>
        <p>You have clicked {count} times</p>
      </h2>

      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
    </>
  );
}
export default UseReducerHook;
