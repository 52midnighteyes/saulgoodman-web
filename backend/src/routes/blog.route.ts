import { Router } from "express";
import {
  createBlogPostController,
  getAllBlogController,
  getBlogDataBySlugController,
} from "../controllers/blog.controllers";

const router = Router();

router.get("/", getAllBlogController);
router.get("/:slug", getBlogDataBySlugController);

router.post("/", createBlogPostController);

export default router;
