import axios from "axios";
import { useEffect, useState } from "react";

const FeachingthroughAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
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
        {data.map((newdata) => (
          <p key={newdata.id}>{newdata.title}</p>
        ))}
      </div>
    </>
  );
};
export default FeachingthroughAxios;
