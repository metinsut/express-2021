import User from "../models/user.js"
import { tokenEncode } from "../utils/tokenHandler.js"

const LogIn = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let token = tokenEncode(user.id);
    try {
        if (!user) {
            res.status(400).json({
                error: "Email wrong",
                success: null,
            })
        } else if (password !== user.password) {
            res.status(400).json({
                error: "Password wrong",
                success: null,
            })
        } else {
            res.header("auth-token", token).json({
                error: null,
                success: {
                    message: "Login Success",
                    user,
                    token
                },
            })
        }
    } catch (error) {
        res.json({
            error: error,
            success: null,
        })
    }
}



export default LogIn;