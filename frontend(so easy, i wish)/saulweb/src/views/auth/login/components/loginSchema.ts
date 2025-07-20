import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string().trim().required(),
  password: Yup.string().trim().min(5).required("password is required"),
});
