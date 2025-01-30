import "./App.css";
import ErrorMassage from "./props/ErrorMassage";
import FoodItem from "./props/FoodItem";

function App() {
  let food = ["Apple", "Orange", "mango", "Sald", "Roti", "milk"];
  //let food = [];
  return (
    <>
      <ErrorMassage appa={food}></ErrorMassage>
    </>
    // <Container>
    //   <ErrorMassage appa={food}></ErrorMassage>
    // </Container>
  );
}

export default App;
