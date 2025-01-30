import FoodItem from "./FoodItem";

function MyHealthyFood({ fooditems }) {
  return (
    <>
      <ul className="list-group">
        {fooditems.map((item) => (
          // <FoodItem fooddata={item}></FoodItem>
          <FoodItem
            fooddata={item}
            HandleOnClick={() => console.log(item + " being baught")}
          ></FoodItem>
        ))}
      </ul>
    </>
  );
}
export default MyHealthyFood;
