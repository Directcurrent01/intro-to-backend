import { Router } from "express"; 
import { registerUser, loginUser, logoutUser} from "../controllers/user.controller.js";

const router = Router();  // create a router

router.route("/register").post(registerUser)  // define the register user route
router.route("/login").post(loginUser)  // define the login user route
router.route("/logout").post(logoutUser)  // define the logout user route

export default router;