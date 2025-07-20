export interface ILoginParam {
  username: string;
  password: string;
}

export interface IRegisterParam {
  username: string;
  email: string;
  password: string;
  role: "admin" | "user";
}
