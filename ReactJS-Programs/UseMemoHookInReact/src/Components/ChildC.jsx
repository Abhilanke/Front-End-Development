import { useContext } from "react";
import { UserContext } from "../App";

function ChildC() {
  // consuming the context shared by App.jsx
  let data = useContext(UserContext);
  return (
    <>
      <h1>I am Grand Child c</h1>
      <div>data recived is : {data.name}</div>
    </>
  );
}
export default ChildC;
