import {
  findUserByEmail,
  findUserByUsername,
} from "../helpers/primsa-finder.helper";
import { ILoginParam, IRegisterParam } from "../interface/user.interface";
import prisma from "../lib/prisma";

export async function userRegisterRepo(params: IRegisterParam) {
  const data = await findUserByEmail(params.email);
  if (data) throw new Error("email already registered");
  if (data.username) throw new Error("username already taken");
  const response = await prisma.users.create({
    data: {
      ...params,
    },
  });
}

export async function userLoginRepo(params: ILoginParam) {
  const checkEmail = await findUserByEmail(params.username);
}
