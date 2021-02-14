import express from "express"
import userRouter from "./users.js"
import authRouter from "./auth.js"
import homeRouter from "./home.js"
import postsRouter from "./posts.js"

const router = express.Router();

router.use("/", homeRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/posts", postsRouter);


export default router;