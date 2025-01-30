function Food() {
  // let food = ["Apple", "Orange", "mango", "Sald", "Roti", "milk"];
  //let food = [];
  return (
    <>
      <h2 className="mb-2">Healty Food</h2>
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {food.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Food;
