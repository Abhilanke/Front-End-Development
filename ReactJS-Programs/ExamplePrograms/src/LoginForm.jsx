import React, { useState } from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [userStatus, setUserStatus] = useState({
    message: "",
    color: "",
  });

  const formData = (data) => {
    const { username, password } = data;

    if (username === "abhi" && password === "abhi") {
      setUserStatus({ message: "Valid User", color: "green" });
    } else {
      setUserStatus({ message: "Invalid User", color: "red" });
    }
  };

  return (
    <form onSubmit={handleSubmit(formData)}>
      <h2>Login Form</h2>
      <div>
        <label>UserName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Please enter at least 3 characters",
            },
            maxLength: {
              value: 6,
              message: "Username must not exceed 6 characters",
            },
          })}
        />
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Password :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Please enter at least 3 characters",
            },
            maxLength: {
              value: 6,
              message: "Password must not exceed 6 characters",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      <br />
      <div>
        <input type="submit" value="Submit" />
      </div>
      <div>
        {userStatus.message && (
          <p style={{ color: userStatus.color, fontWeight: "bold" }}>
            {userStatus.message}
          </p>
        )}
      </div>
    </form>
  );
}

export default LoginForm;
