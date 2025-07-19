import { Response, Request, NextFunction } from "express";
import {
  createBlogPostRepo,
  getAllBlogRepo,
  getBlogDataBySlugRepo,
} from "../repositories/blog.repository";

export async function createBlogPostController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { title, content, tag, category, author } = req.body;

    if (!title || !content || !author) {
      throw new Error("title, content and author field need to be filled");
    }
    if (
      typeof title !== "string" ||
      typeof content !== "string" ||
      typeof tag !== "string" ||
      typeof author !== "string" ||
      typeof category !== "string"
    ) {
      throw new Error("incorrect data type");
    }

    const response = await createBlogPostRepo(req.body);

    res.status(201).json({
      message: "blog creation success",
      data: response,
    });
  } catch (err) {
    next(err);
  }
}

export async function getAllBlogController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const response = await getAllBlogRepo();

    res.status(201).json({
      message: "sucess",
      data: response,
    });
  } catch (err) {
    next(err);
  }
}

export async function getBlogDataBySlugController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const slug: string = req.params.slug;

    const response = await getBlogDataBySlugRepo(slug);

    res.status(201).json({
      message: "success",
      data: response,
    });
  } catch (err) {
    next(err);
  }
}
