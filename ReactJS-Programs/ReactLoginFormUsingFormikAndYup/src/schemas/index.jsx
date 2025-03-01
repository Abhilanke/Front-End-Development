import * as Yup from "yup";

export const singUpSchema = Yup.object({
  username: Yup.string().min(2).max(25).required("Plaese enter Your Name"),

  password: Yup.string().min(4).required("Plaese enter Your password"),
});
