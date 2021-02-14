import { userVerifyUtility } from "../middleware/userVerify.js"

const Posts = async (req, res, next) => {
    const token = req.get("auth-token")
    const isUserValid = await userVerifyUtility(token)
    if (isUserValid) {
        res.json({
            success: {
                posts: ["user post1", "user post2"]
            },
            error: null
        })
    } else {
        res.json({
            success: {
                posts: ["random post1", "random post2"]
            },
            error: null
        })
    }
};

export default Posts;