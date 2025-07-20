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
exports.userRegisterController = userRegisterController;
exports.userLoginController = userLoginController;
const user_repository_1 = require("../repositories/user.repository");
const client_1 = require("@prisma/client");
function userRegisterController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, email, password, role } = req.body;
            if (!username || !email || !password || !role)
                throw new Error("data incompleted");
            if (typeof username !== "string" ||
                typeof email !== "string" ||
                typeof password !== "string")
                throw new Error("wrong data type");
            const roleLower = role.toLowerCase();
            if (roleLower !== client_1.Role.admin.toLowerCase() &&
                roleLower !== client_1.Role.user.toLowerCase())
                throw new Error("incorrect role type");
            const response = yield (0, user_repository_1.userRegisterRepo)(req.body);
            res.status(201).json({
                messsage: "register success",
                data: response,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
function userLoginController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password } = req.body;
            if (typeof username !== "string" || typeof password !== "string")
                throw new Error("incorrect data type");
            const response = yield (0, user_repository_1.userLoginRepo)(req.body);
            res.status(201).json({
                message: "login success",
                data: response,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
