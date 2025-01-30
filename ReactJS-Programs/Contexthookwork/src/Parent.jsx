import React from "react";

import Child from "./Child";

const Parent = () => {
  return (
    <>
      <h2>Parent Comp</h2>
      <Child />
    </>
  );
};

// const Wrapper = styled.section`
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 3.2rem;
//   font-size: 2rem;
// `;

export default Parent;
