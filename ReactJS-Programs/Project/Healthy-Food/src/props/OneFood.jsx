function OneFood({ fooddata }) {
  return (
    <li key={fooddata} class="list-group-item">
      {fooddata}
    </li>
  );
}
export default OneFood;
