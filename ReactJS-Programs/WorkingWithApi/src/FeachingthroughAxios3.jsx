import axios from "axios";
import { useEffect, useState } from "react";

const FeachingthroughAxios3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fake-json-api.mock.beeceptor.com/users")
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
      <div className="row">
        {data.map((newdata, index) => (
          <div key={index} className="col-lg-3">
            <div className="card">
              <img src={newdata.photo} className="card-img-top" alt="photo" />
              <div className="card-body">
                <h5 className="card-title">{newdata.name}</h5>
                <p className="card-text">{newdata.state}</p>
                <p className="card-text">{newdata.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default FeachingthroughAxios3;
