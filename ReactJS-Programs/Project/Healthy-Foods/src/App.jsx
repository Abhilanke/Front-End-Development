import { useState } from "react";
import "./App.css";
import Container from "./Container";
import FoodAppTitle from "./FoodAppTitle";
import FoodInput from "./FoodInput";
import MyHealthyFood from "./MyHealthyFood";

function App() {
  //let message1 = "Enter Your Food Name";
  const [value, setvalue] = useState([
    // "Sprouts",
    // "Salad",
    // "Milk",
    // "Dal",
    // "Egg",
    // "Paneer",
    // "Oats",
  ]);
  let finalhealthyfoods = [];
  // let healthyfoods = [
  //   "Sprouts",
  //   "Salad",
  //   "Milk",
  //   "Dal",
  //   "Egg",
  //   "Paneer",
  //   "Oats",
  // ];
  //let finalhealthyfoods = [...healthyfoods, value]; //Createing  new Array with exceting array and food item

  const HandleonChange = (event) => {
    // console.log(event.target.value);
    //setvalue(event.target.value);
    if (event.key === "Enter") {
      let newFood = event.target.value;
      // finalhealthyfoods = [...healthyfoods, newFood];
      // setvalue(finalhealthyfoods);
      finalhealthyfoods = [...value, newFood];
      setvalue(finalhealthyfoods);
      event.target.value = "";
    }
  };

  return (
    <>
      <FoodAppTitle></FoodAppTitle>
      <FoodInput HandleonKeyDown={HandleonChange}></FoodInput>
      <MyHealthyFood fooditems={value}></MyHealthyFood>
    </>
  );
}

export default App;
