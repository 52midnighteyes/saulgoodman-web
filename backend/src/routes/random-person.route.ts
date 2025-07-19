import { Router } from "express";
import { getRandomPeopleController } from "../controllers/random-user.controllers";

const router = Router();

router.get("/", getRandomPeopleController);

export default router;
