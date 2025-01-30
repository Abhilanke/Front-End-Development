import { useRef, useState } from "react";

function UseRef() {
  let [A, setA] = useState(0);
  let B = useRef(0);

  function hendleOnClick() {
    B.current = B.current + 1;
    console.log("Re render Ho gaya....");
    console.log(B);
    setA(A + 1);
  }
  return (
    <>
      <p>{A}</p>
      <button onClick={hendleOnClick}> Click</button>
    </>
  );
}
export default UseRef;
