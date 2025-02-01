import { useEffect, useState } from "react";

const FatchAPI2 = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      });
  });
  return (
    <>
      <h1>Data ..</h1>
      {/* <table>
        {data.map((newdata) => (
          <tr>
            <td>{newdata.name}</td>
            <td>{newdata.capital}</td>
            <td>{newdata.region}</td>
            <td>{newdata.population}</td>
          </tr>
        ))}
      </table> */}
      <table>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Population</th>
        </tr>
        {data.map((newdata, index) => (
          <tr key={index}>
            <td>{newdata.name}</td>
            <td>{newdata.capital}</td>
            <td>{newdata.region}</td>
            <td>{newdata.population}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default FatchAPI2;
