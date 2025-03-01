import * as Yup from "yup";

export const singUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Plaese enter Your Name"),
  email: Yup.string().email().required("Plaese enter your email"),
  password: Yup.string().min(6).required("Plaese enter Your password"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
