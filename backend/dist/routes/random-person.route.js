"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const random_user_controllers_1 = require("../controllers/random-user.controllers");
const router = (0, express_1.Router)();
router.get("/", random_user_controllers_1.getRandomPeopleController);
exports.default = router;
