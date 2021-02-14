import express from "express"
import postsController from "../controllers/postsController.js"
import specialPostsController from "../controllers/specialPostsController.js"
import { userVerifyMiddleware } from "../middleware/userVerify.js"

const router = express.Router();

router.get("/", postsController);
router.get("/special", userVerifyMiddleware, specialPostsController);

export default router;