import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementfive,
  increment,
  incrementfive,
} from "./actions/counterActions";

const App = () => {
  // Get the counter value from Redux store
  const counter = useSelector((state) => state.counter);

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>REACT REDUX PROJECT</h1>
      <hr />
      <h3>INCREMENT AND DICREMENT COUNT USING REDUX</h3>
      <hr />
      <br />
      <br /> <hr />
      <h1>Counter: {counter}</h1>
      <hr />
      <div>
        <button
          onClick={() => dispatch(increment())}
          style={{ fontSize: "20px", margin: "10px" }}
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          style={{ fontSize: "20px", margin: "10px" }}
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch(incrementfive())}
          style={{ fontSize: "20px", margin: "10px" }}
        >
          +5
        </button>
        <button
          onClick={() => dispatch(decrementfive())}
          style={{ fontSize: "20px", margin: "10px" }}
        >
          -5
        </button>
      </div>
    </div>
  );
};

export default App;
