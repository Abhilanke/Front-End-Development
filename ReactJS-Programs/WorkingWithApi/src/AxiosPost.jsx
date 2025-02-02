import axios from "axios";
import { useState } from "react";

const AxiosPost = () => {
  const [data, setpostData] = useState({
    title: "",
    body: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setpostData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      //   .then((res) => {
      //     console.log("post Data", res.postData);
      //   })
      .then((response) => {
        console.log("Data posted", response.data);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setpostData({ ...postData, [name]: value });
  //   };

  return (
    <div>
      <h1>Create Blog Post form</h1>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>body</label>
        <input
          type="text"
          name="body"
          value={data.body}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};
export default AxiosPost;
