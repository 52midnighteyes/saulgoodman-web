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
exports.findUserById = findUserById;
exports.findUserByEmail = findUserByEmail;
exports.findUserByUsername = findUserByUsername;
exports.findBlogById = findBlogById;
exports.findBlogBySlug = findBlogBySlug;
const prisma_1 = __importDefault(require("../lib/prisma"));
function findUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma_1.default.user.findUnique({
                where: {
                    id,
                },
            });
            return response;
        }
        catch (err) {
            throw err;
        }
    });
}
function findUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma_1.default.user.findFirst({
                where: {
                    email: {
                        equals: email,
                        mode: "insensitive",
                    },
                },
            });
            return response;
        }
        catch (err) {
            throw err;
        }
    });
}
function findUserByUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma_1.default.user.findFirst({
                where: {
                    username: {
                        equals: username,
                        mode: "insensitive",
                    },
                },
            });
            return response;
        }
        catch (err) {
            throw err;
        }
    });
}
function findBlogById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma_1.default.blog.findUnique({
                where: {
                    id,
                },
            });
            return response;
        }
        catch (err) {
            throw err;
        }
    });
}
function findBlogBySlug(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield prisma_1.default.blog.findFirst({
                where: {
                    slug: {
                        equals: slug,
                        mode: "insensitive",
                    },
                },
            });
            return response;
        }
        catch (err) {
            throw err;
        }
    });
}
