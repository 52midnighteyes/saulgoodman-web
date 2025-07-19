import { Request, Response, NextFunction } from "express";
import { getRandomPeopleRepo } from "../repositories/random-person.repository";

export async function getRandomPeopleController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const number = Number(req.params);
    const response = await getRandomPeopleRepo(number);

    res.status(201).json({
      message: `success retriving ${number} random people`,
      data: response,
    });
  } catch (err) {
    next(err);
  }
}
