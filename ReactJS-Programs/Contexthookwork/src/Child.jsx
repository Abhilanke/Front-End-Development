import React from "react";
import { useGlobalContext } from "./AppContext";

const Child = () => {
  const userData = useGlobalContext();

  return (
    <div>
      Child = My name is {userData.name} and my age is {userData.age}.{" "}
      {console.log("My name is {userData.name} and my age is {userData.age}")}
    </div>
  );
};

export default Child;
