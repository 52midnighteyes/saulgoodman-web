import { Response, Request, NextFunction } from "express";
import { IRegisterParam } from "../interface/user.interface";
import {
  userLoginRepo,
  userRegisterRepo,
} from "../repositories/user.repository";
import { Role } from "@prisma/client";

export async function userRegisterController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, email, password, role }: IRegisterParam = req.body;
    if (!username || !email || !password || !role)
      throw new Error("data incompleted");
    if (
      typeof username !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    )
      throw new Error("wrong data type");
    const roleLower = role.toLowerCase();

    if (
      roleLower !== Role.admin.toLowerCase() &&
      roleLower !== Role.user.toLowerCase()
    )
      throw new Error("incorrect role type");

    const response = await userRegisterRepo(req.body);

    res.status(201).json({
      messsage: "register success",
      data: response,
    });
  } catch (err) {
    next(err);
  }
}

export async function userLoginController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, password } = req.body;

    if (typeof username !== "string" || typeof password !== "string")
      throw new Error("incorrect data type");

    const response = await userLoginRepo(req.body);

    res.status(201).json({
      message: "login success",
      data: response,
    });
  } catch (err) {
    next(err);
  }
}
