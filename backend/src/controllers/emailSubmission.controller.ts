import { Response, Request, NextFunction } from "express";
import { createEmailSubmissionRepo } from "../repositories/emailSubmission.repository";

export async function CreateEmailSubmissionController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { firstname, lastname, email, content } = req.body;

    if (!firstname || !email || !content)
      throw new Error("firstname, email and content cant be empty");
    if (
      typeof firstname !== "string" ||
      typeof email !== "string" ||
      typeof content !== "string"
    ) {
      throw new Error("incorrect input type (firstname, email, content)");
    }
    if (lastname && typeof firstname !== "string") {
      throw new Error("incorrect input type (lastname)");
    }

    const response = await createEmailSubmissionRepo(req.body);

    res.status(201).json({
      message: "email sent",
      data: response,
    });
  } catch (err) {
    next(err);
  }
}
