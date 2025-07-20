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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlogPostRepo = createBlogPostRepo;
exports.getAllBlogRepo = getAllBlogRepo;
exports.getBlogDataBySlugRepo = getBlogDataBySlugRepo;
const prisma_finder_helper_1 = require("../helpers/prisma-finder.helper");
const slug_generator_helper_1 = require("../helpers/slug-generator.helper");
const prisma_1 = __importDefault(require("../lib/prisma"));
function createBlogPostRepo(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const slug = (0, slug_generator_helper_1.generateSlug)(params.title);
            const checkTitle = yield (0, prisma_finder_helper_1.findBlogBySlug)(slug);
            if (checkTitle)
                throw new Error("article or article title already exists");
            const response = yield prisma_1.default.blog.create({
                data: Object.assign(Object.assign({}, params), { slug }),
            });
            return response;
        }
        catch (err) {
            throw err;
        }
    });
}
function getAllBlogRepo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma_1.default.blog.findMany();
            if (!response)
                throw new Error("data not found");
            return response;
        }
        catch (err) {
            throw err;
        }
    });
}
function getBlogDataBySlugRepo(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, prisma_finder_helper_1.findBlogBySlug)(slug);
            if (!response)
                throw new Error("data not found");
            return response;
        }
        catch (error) {
            throw error;
        }
    });
}
//filterBlogByDate
//filterBlogByAuthor
