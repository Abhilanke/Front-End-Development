import { useForm } from "react-hook-form";

function UserForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  function formData(data) {
    console.log("Data Submitted", data);
    console.log("First Name :", data.firstname);
    console.log("Middle Name :", data.middlename);
    console.log("Last Name:", data.lastname);
  }
  return (
    <form onSubmit={handleSubmit(formData)}>
      <h2>User Form</h2>
      <div>
        <label>FirstName :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          {...register("firstname", {
            required: true,
            minLength: {
              value: 3,
              message: "Please enter atleast 3 Character",
            },
            maxLength: {
              value: 6,
              message: "Please enter proper  Name",
            },
          })}
        />
        {errors.firstname && <p>{errors.firstname.message}</p>}
      </div>
      <br />
      <div>
        <label>MiddleName :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          {...register("middlename", {
            required: true,
            minLength: {
              value: 3,
              message: "Please enter atleast 3 Character",
            },
            maxLength: {
              value: 6,
              message: "Please enter proper Name",
            },
          })}
        />
        {errors.middlename && <p>{errors.middlename.message}</p>}
      </div>
      <br />
      <div>
        <label>LastName :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          {...register("lastname", {
            required: true,
            minLength: {
              value: 3,
              message: "Please enter atleast 3 Character",
            },
            maxLength: {
              value: 6,
              message: "Please enter proper Name",
            },
          })}
        />
        {errors.lastname && <p>{errors.lastname.message}</p>}
      </div>
      <br />
      <input type="submit" value="submit" />
      {/* <div>
        <h4>Inpute data</h4>
        <p>First name{data.firstname}</p>
        <p>Middle Name{data.middlename}</p>
        <p>Last Name {data.lastname}</p>
      </div> */}
    </form>
  );
}
export default UserForm;
