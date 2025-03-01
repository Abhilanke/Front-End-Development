import { useFormik } from "formik";
import { singUpSchema } from "./schemas";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

function UserForm() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const { values, touched, errors, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: singUpSchema,
      onSubmit: (values) => {
        if (values.username === "abhishek" && values.password === "react") {
          navigate("/welcome");
        } else {
          setMessage("Invalid User");
        }
      },
    });

  return (
    <>
      <h2>UserForm Using Formik And Yup</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter UserName"
          name="username"
          autoComplete="off"
          value={values.username}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.username && errors.username ? (
          <h6 className="text-danger">{errors.username}</h6>
        ) : null}
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Enter Password"
          name="password"
          autoComplete="off"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.password && errors.password ? (
          <h6 className="text-danger">{errors.password}</h6>
        ) : null}

        <button type="submit" className="btn btn-secondary">
          Login
        </button>
      </form>
      {message && <h4 className="text-danger">{message}</h4>}
    </>
  );
}

export default UserForm;
