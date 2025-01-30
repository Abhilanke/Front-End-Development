function ConditionalRendering() {
  //let food = ["Apple", "Orange", "mango", "Sald", "Roti", "milk"];
  //let food = [];
  let food = [];
  if (food.length === 0) {
    return <h2>There are no foods in list ,Plaese add</h2>;
  }
  return (
    <>
      <h2 className="mb-2">Healty Food</h2>
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

export default ConditionalRendering;
