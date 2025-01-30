import Child from "./Child";

function Parent({ acessproperty }) {
  // let { getLand, getFund } = acessproperty;
  return (
    <>
      <Child yourProperty={acessproperty}></Child>
    </>
  );
}
export default Parent;
