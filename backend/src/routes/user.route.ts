import {Router} from "express"
import { userLoginController, userRegisterController } from "../controllers/user.controllers"


const router = Router()

router.post("/register", userRegisterController)
router.post("/login", userLoginController)



export default router