import { tokenDecode } from "../utils/tokenHandler.js"
import User from "../models/user.js"

const userVerifyUtility = async (token = "") => {
    if (token && token !== undefined && token !== "undefined") {
        const { id } = tokenDecode(token)
        try {
            const user = await User.findById(id)
            if (user) {
                return user
            } else {
                return false
            }
        } catch (error) {
            return false
        }
    } else {
        return false
    }
}

const userVerifyMiddleware = async (req, res, next) => {
    const token = req.get("auth-token")
    const hasUser = await userVerifyUtility(token)
    if (hasUser) {
        req.user = hasUser
        next()
    } else {
        res.status(400).json({
            success: null,
            error: "Please log in"
        })
    }
}

export { userVerifyUtility, userVerifyMiddleware };