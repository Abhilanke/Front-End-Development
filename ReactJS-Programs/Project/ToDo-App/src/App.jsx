import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDoApp from "./ToDoApp";
import Title from "./Componant/Title";
import Output1 from "./Componant/Output1";
import Output2 from "./Componant/Output2";
import Input11 from "./Componant/input11";

function App() {
  return (
    <div id="parant">
      <Title></Title>
      <div class="container text-center ">
        <Input11></Input11>
        <Output1></Output1>
        <Output2></Output2>
      </div>
    </div>
  );
}

export default App;
