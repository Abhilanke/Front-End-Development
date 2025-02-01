import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FatchAPI from "./FatchAPI";
import FatchAPI2 from "./FatchAPI2";
import SWR from "./SWR";
import SwrAPIMethod from "./SwrAPIMethod";
import SwrAPIMethod2 from "./SwrAPIMethod2";

function App() {
  return (
    <>
      <h2>Working with API </h2>

      {/* <FatchAPI2></FatchAPI2> */}
      {/* <SWR></SWR> */}
      {/* <SwrAPIMethod></SwrAPIMethod> */}
      <SwrAPIMethod2></SwrAPIMethod2>
    </>
  );
}

export default App;
