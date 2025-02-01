import { useEffect, useState } from "react";

const FatchAPI = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((resp) => {
        return resp.json();
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  });
  return (
    <>
      <h1>Loding...</h1>
      <table>
        {data.map((newdata) => (
          <tr>
            <td>{newdata["ID Year"]}</td>
            <td>{newdata.Nation}</td>
            <td>{newdata.Population}</td>
          </tr>
        ))}
      </table>
    </>
  );
};
export default FatchAPI;
