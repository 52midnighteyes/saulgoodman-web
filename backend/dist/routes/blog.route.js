"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_controllers_1 = require("../controllers/blog.controllers");
const router = (0, express_1.Router)();
router.get("/", blog_controllers_1.getAllBlogController);
router.get("/:slug", blog_controllers_1.getBlogDataBySlugController);
router.post("/", blog_controllers_1.createBlogPostController);
exports.default = router;
