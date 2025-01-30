import OneFood from "./OneFood";

function FoodItem({ fooditem }) {
  return (
    <>
      <h2 className="mb-2">Healty Food</h2>
      <ul className="list-group">
        {fooditem.map((item) => (
          <OneFood fooddata={item}></OneFood>
        ))}
      </ul>
    </>
  );
}
export default FoodItem;
