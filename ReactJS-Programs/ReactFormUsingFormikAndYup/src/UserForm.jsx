import { useFormik } from "formik";
import { singUpSchema } from "./schemas";

const initialvalues = {
  name: "",
  password: "",
  confirmpassword: "",
  email: "",
};

function UserForm() {
  const { values, touched, errors, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: singUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  //   console.log(formik);
  console.log(errors.name);
  console.log(errors.email);
  console.log(errors.password);
  console.log(errors.confirmpassword);

  return (
    <>
      <h2>UserForm Using Formik And Yup</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter Name"
          name="name"
          autoComplete="off"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.name && errors.name ? (
          <h6 className="text-danger">{errors.name}</h6>
        ) : null}
        <input
          type="text"
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
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter confirm password"
          name="confirmpassword"
          autoComplete="off"
          value={values.confirmpassword}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.confirmpassword && errors.confirmpassword ? (
          <h6 className="text-danger">{errors.confirmpassword}</h6>
        ) : null}
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter email"
          name="email"
          autoComplete="off"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.email && errors.email ? (
          <h6 className="text-danger">{errors.email}</h6>
        ) : null}

        <button type="submit" className="btn btn-secondary">
          Register
        </button>
      </form>
    </>
  );
}
export default UserForm;
