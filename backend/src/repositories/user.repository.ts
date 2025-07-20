import {
  findUserByEmail,
  findUserByUsername,
} from "../helpers/prisma-finder.helper";
import { ILoginParam, IRegisterParam } from "../interface/user.interface";
import prisma from "../lib/prisma";

export async function userRegisterRepo(params: IRegisterParam) {
  try {
    const checkEmail = await findUserByEmail(params.email);
    const checkUsername = await findUserByUsername(params.username);

    if (checkEmail && checkUsername)
      throw new Error("username and email already registered");
    if (checkUsername) throw new Error("username and ");
    if (checkEmail) throw new Error("email already registered");
    const response = await prisma.user.create({
      data: {
        ...params,
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export async function userLoginRepo(params: ILoginParam) {
  try {
    const response = await findUserByUsername(params.username);
    console.log(response);
    console.log(params.username, response?.username);
    console.log(params.password, response?.password);
    if (!response) throw new Error("password or username is wrong");
    if (
      params.username !== response.username ||
      params.password !== response.password
    )
      throw new Error("password or username is wrong");

    return response;
  } catch (err) {
    throw err;
  }
}
