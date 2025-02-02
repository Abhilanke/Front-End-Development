import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FatchAPI from "./FatchAPI";
import FatchAPI2 from "./FatchAPI2";
import SWR from "./SWR";
import SwrAPIMethod from "./SwrAPIMethod";
import SwrAPIMethod2 from "./SwrAPIMethod2";
import FeachingthroughAxios from "./FeachingthroughAxios";
import FeachingthroughAxios2 from "./FeachingthroughAxios2";
import FeachingthroughAxios3 from "./FeachingthroughAxios3";
import AxiosPost from "./AxiosPost";

function App() {
  return (
    <>
      <h2>Working with API </h2>

      {/* <FatchAPI2></FatchAPI2> */}
      {/* <SWR></SWR> */}
      {/* <SwrAPIMethod></SwrAPIMethod> */}
      {/* <SwrAPIMethod2></SwrAPIMethod2> */}
      {/* <FeachingthroughAxios></FeachingthroughAxios> */}
      {/* <FeachingthroughAxios2></FeachingthroughAxios2> */}
      {/* <FeachingthroughAxios3></FeachingthroughAxios3> */}
      <AxiosPost></AxiosPost>
    </>
  );
}

export default App;
