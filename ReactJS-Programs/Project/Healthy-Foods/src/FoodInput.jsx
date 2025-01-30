function FoodInput({ HandleonKeyDown }) {
  return (
    <>
      <input
        className="form-control form-control-lg"
        type="text"
        placeholder="Enter your food name"
        // onChange={(event) => console.log(event.target.value)}
        onKeyDown={HandleonKeyDown}
      />
    </>
  );
}
export default FoodInput;
