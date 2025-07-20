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
exports.getRandomPeopleController = getRandomPeopleController;
const random_person_repository_1 = require("../repositories/random-person.repository");
function getRandomPeopleController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const number = req.query.results;
            const response = yield (0, random_person_repository_1.getRandomPeopleRepo)(Number(number));
            console.log(number);
            res.status(201).json({
                message: `success retrieving ${number} random people`,
                data: response,
            });
        }
        catch (err) {
            next(err);
        }
    });
}
