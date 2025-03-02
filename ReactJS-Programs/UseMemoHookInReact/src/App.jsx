import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseMemoHook from "./UseMemoHook";
import UseRefHook from "./UseRefHook";
import ChildA from "./Components/ChildA";
//1. create context
let UserContext = createContext();
function App() {
  //2. create data
  let [name, setName] = useState({ name: "Abhishek" });
  return (
    //3. create provider and encapsulate all child components

    <>
      {/* <UseRefHook></UseRefHook>
      <UseMemoHook></UseMemoHook> */}
      <UserContext.Provider value={name}>
        <ChildA />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
