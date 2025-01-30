import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState from "./UseState";
import UseReducerHook from "./UseReducerHook";
import UseEffect from "./UseEffect";

function App() {
  return (
    <>
      <UseEffect></UseEffect>
      <UseState></UseState>
      <UseReducerHook></UseReducerHook>
    </>
  );
}

export default App;
