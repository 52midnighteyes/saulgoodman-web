import * as Yup from "yup";

export const registerSchema = Yup.object({
  username: Yup.string().min(3).required("Username wajib diisi"),
  email: Yup.string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  password: Yup.string().min(6).required("Password wajib diisi"),
  role: Yup.string().oneOf(["admin", "user"]).required("Role wajib dipilih"),
});
