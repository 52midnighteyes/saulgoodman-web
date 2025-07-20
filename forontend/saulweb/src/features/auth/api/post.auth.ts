import axios from "axios";
import {
  ILoginParam,
  IRegisterParam,
} from "@/features/auth/types/login.interface";

export async function LoginService(params: ILoginParam) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.post(`${apiUrl}/api/auth/login`, {
      username: params.username,
      password: params.password,
    });

    return response;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      throw err.response ?? err;
    }
    throw err;
  }
}

export async function RegisterService(params: IRegisterParam) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.post(`${apiUrl}/api/auth/register`, {
      username: params.username,
      email: params.email,
      password: params.password,
      role: params.role,
    });

    return response;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data || err.message;
    }
    throw err;
  }
}
