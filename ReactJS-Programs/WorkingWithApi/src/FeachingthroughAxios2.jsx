import axios from "axios";
import { useEffect, useState } from "react";

const FeachingthroughAxios2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummy-json.mock.beeceptor.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log("Error" + error.message);
      });
  }, []);

  return (
    <>
      <h2>Using Axios library to get the data from an API</h2>;
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>body</th>
            <th>link</th>
          </tr>
          {data.map((newdata, index) => (
            <tr key={index}>
              <td>{newdata.id}</td>
              <td>{newdata.title}</td>
              <td>{newdata.body}</td>
              <td>{newdata.link}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
export default FeachingthroughAxios2;
