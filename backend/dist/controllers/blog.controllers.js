"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlogPostController = createBlogPostController;
exports.getAllBlogController = getAllBlogController;
exports.getBlogDataBySlugController = getBlogDataBySlugController;
const blog_repository_1 = require("../repositories/blog.repository");
function createBlogPostController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, content, tag, category, author } = req.body;
            if (!title || !content || !author) {
                throw new Error("title, content and author field need to be filled");
            }
            if (typeof title !== "string" ||
                typeof content !== "string" ||
                typeof tag !== "string" ||
                typeof author !== "string" ||
                typeof category !== "string") {
                throw new Error("incorrect data type");
            }
            const response = yield (0, blog_repository_1.createBlogPostRepo)(req.body);
            res.status(201).json({
                message: "blog creation success",
                data: response,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function getAllBlogController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, blog_repository_1.getAllBlogRepo)();
            res.status(201).json({
                message: "sucess",
                data: response,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function getBlogDataBySlugController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const slug = req.params.slug;
            const response = yield (0, blog_repository_1.getBlogDataBySlugRepo)(slug);
            res.status(201).json({
                message: "success",
                data: response,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
