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
exports.CreateEmailSubmissionController = CreateEmailSubmissionController;
const emailSubmission_repository_1 = require("../repositories/emailSubmission.repository");
function CreateEmailSubmissionController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { firstname, lastname, email, content } = req.body;
            if (!firstname || !email || !content)
                throw new Error("firstname, email and content cant be empty");
            if (typeof firstname !== "string" ||
                typeof email !== "string" ||
                typeof content !== "string") {
                throw new Error("incorrect input type (firstname, email, content)");
            }
            if (lastname && typeof firstname !== "string") {
                throw new Error("incorrect input type (lastname)");
            }
            const response = yield (0, emailSubmission_repository_1.createEmailSubmissionRepo)(req.body);
            res.status(201).json({
                message: "email sent",
                data: response,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
