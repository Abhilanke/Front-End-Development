function ErrorMassage({ appa }) {
  //let result = fooditem.length === 0 ? <h2>No Food item</h2> : null; //sinse the array is empty hance it return no food items
  return appa.length === 0 ? (
    <h2>No Food item</h2>
  ) : (
    <>
      <h2 className="mb-2">Healty Food</h2>

      {/* printing the value of result return above */}
      <ul className="list-group">
        {appa.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ErrorMassage;
