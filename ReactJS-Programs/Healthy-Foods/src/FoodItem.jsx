// import css from "./FoodItem.module.css";

function FoodItem({ fooddata, HandleOnClick }) {
  // function GetFoodItem(event) {
  //   console.log(fooddata + " is being baught");
  //   //console.log(event);
  // }

  return (
    <>
      <li key={fooddata} className="list-group-item">
        {fooddata}
        <button
          className="btn btn-secondary"
          id="buybutton"
          // onClick={(event) => GetFoodItem(event)}
          onClick={HandleOnClick}
        >
          Buy
        </button>
      </li>
    </>
  );
}
export default FoodItem;
