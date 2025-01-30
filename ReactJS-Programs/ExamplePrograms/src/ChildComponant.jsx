import React from "react";

const ChildComponant = React.memo((props) => {
  console.log("child componants re-rendered");

  return (
    <>
      <button onClick={props.buttonClick}>{props.buttonname}</button>
    </>
  );
});
export default ChildComponant;
