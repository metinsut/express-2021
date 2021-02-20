import express from "express"
import registerController from "../controllers/registerController.js"
import logInController from "../controllers/logInController.js"
import logOutController from "../controllers/logOutController.js"
import { userVerifyMiddleware } from "../middleware/userVerify.js"
import tokenCheckController from "../controllers/tokenCheckController.js"

const router = express.Router();

router.post("/register", registerController);
router.post("/login", logInController);
router.post("/logout", logOutController);
router.get("/tokencheck", userVerifyMiddleware, tokenCheckController);

export default router;