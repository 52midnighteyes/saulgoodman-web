export interface IRegisterArgs {
  username: string;
  email: string;
  password: string;
  role: "admin" | "user";
}
