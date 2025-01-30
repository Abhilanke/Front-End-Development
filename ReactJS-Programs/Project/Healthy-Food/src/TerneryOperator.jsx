function TerneryOperator() {
  //let food = ["Apple", "Orange", "mango", "Sald", "Roti", "milk"];
  //let food = [];
  let food = [];
  // if (food.length === 0) {
  //   return <h2>There are no foods in list ,Plaese add</h2>;
  // }
  let result = food.length === 0 ? <h2>No Food item</h2> : null; //sinse the array is empty hance it return no food items
  //return result;
  return (
    //food.length === 0 ? <h2>No Food item</h2> :
    <>
      <h2 className="mb-2">Healty Food</h2>
      {result} {/* printing the value of result return above */}
      <ul className="list-group">
        {food.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default TerneryOperator;
