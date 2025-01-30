import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./Parent";

function App() {
  //let property = "50 acre land";
  let propertys = {
    land: "60 k",
    cash: "50 lack",
  };
  return (
    <>
      <Parent acessproperty={propertys}></Parent>
    </>
  );
}

export default App;
