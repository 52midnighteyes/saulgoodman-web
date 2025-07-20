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
exports.userRegisterRepo = userRegisterRepo;
exports.userLoginRepo = userLoginRepo;
const prisma_finder_helper_1 = require("../helpers/prisma-finder.helper");
const prisma_1 = __importDefault(require("../lib/prisma"));
function userRegisterRepo(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const checkEmail = yield (0, prisma_finder_helper_1.findUserByEmail)(params.email);
            const checkUsername = yield (0, prisma_finder_helper_1.findUserByUsername)(params.username);
            if (checkEmail && checkUsername)
                throw new Error("username and email already registered");
            if (checkUsername)
                throw new Error("username and ");
            if (checkEmail)
                throw new Error("email already registered");
            const response = yield prisma_1.default.user.create({
                data: Object.assign({}, params),
            });
            return response;
        }
        catch (err) {
            throw err;
        }
    });
}
function userLoginRepo(params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, prisma_finder_helper_1.findUserByUsername)(params.username);
            console.log(response);
            console.log(params.username, response === null || response === void 0 ? void 0 : response.username);
            console.log(params.password, response === null || response === void 0 ? void 0 : response.password);
            if (!response)
                throw new Error("password or username is wrong");
            if (params.username !== response.username ||
                params.password !== response.password)
                throw new Error("password or username is wrong");
            return response;
        }
        catch (err) {
            throw err;
        }
    });
}
