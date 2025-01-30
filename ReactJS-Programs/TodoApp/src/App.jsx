import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Todoinput from "./Todoinput";
import Todotask1 from "./Todotask1";
import Todotask2 from "./Todotask2";

function App() {
  return (
    <div>
      <Header></Header>
      <Todoinput></Todoinput>
      <Todotask1></Todotask1>
      <Todotask2></Todotask2>
    </div>
  );
}

export default App;
