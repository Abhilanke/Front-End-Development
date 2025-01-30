import FoodAppTitle from "../FoodAppTitle";
import FoodInput from "../FoodInput";

function ErrorMassage({ appa }) {
  //let result = fooditem.length === 0 ? <h2>No Food item</h2> : null; //sinse the array is empty hance it return no food items

  function GetFoodItem(foodname) {
    console.log(appa + " is being baught");
    console.log(event);
  }

  return appa.length === 0 ? (
    <h2>No Food item</h2>
  ) : (
    <>
      <FoodAppTitle></FoodAppTitle>
      <FoodInput></FoodInput>
      {/* printing the value of result return above */}
      <ul className="list-group">
        {appa.map((item) => (
          <li key={item} className="list-group-item">
            {item}
            <button
              className="btn btn-secondary"
              id="button"
              onClick={(event) => GetFoodItem(event)}
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ErrorMassage;
