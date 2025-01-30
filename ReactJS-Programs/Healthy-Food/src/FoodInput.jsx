function FoodInput() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your food name"
        aria-describedby="button-addon2"
        onChange={(event) => console.log(event.target.value)}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Add Food
      </button>
    </div>
  );
}
export default FoodInput;
