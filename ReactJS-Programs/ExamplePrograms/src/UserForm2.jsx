import { useState } from "react";

function UserForm2() {
  const [user, setUser] = useState({
    username: "",
    contectno: "",
    address: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmit}>
          <h1>User From</h1>
          <br />

          <label> Name : &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <label> ContectNo: &nbsp;</label>
          <input
            type="number"
            name="contectno"
            value={user.contectno}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <label> Address : &nbsp; &nbsp; &nbsp;</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>

        <div>
          <p>Name : {user.username}</p>

          <p>ContectNo : {user.contectno}</p>

          <p>Address : {user.address}</p>
        </div>
      </div>
    </>
  );
}
export default UserForm2;
