import { Request, Response, NextFunction } from "express";
import { getRandomPeopleRepo } from "../repositories/random-person.repository";

export async function getRandomPeopleController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const number = req.query.results;
    const response = await getRandomPeopleRepo(Number(number));

    console.log(number);

    res.status(201).json({
      message: `success retrieving ${number} random people`,
      data: response,
    });
  } catch (err) {
    next(err);
  }
}
