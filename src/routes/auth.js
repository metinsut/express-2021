import express from "express"
import signUpController from "../controllers/signUpController.js"
import logInController from "../controllers/logInController.js"
import logOutController from "../controllers/logOutController.js"

const router = express.Router();

router.post("/signup", signUpController);
router.post("/login", logInController);
router.post("/logout", logOutController);

export default router;