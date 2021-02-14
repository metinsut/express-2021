import User from "../models/user.js"

const LogOut = (req, res) => {
    const { email, jwt } = req.body
    const matchedUser = User.findOne({ email })
    matchedUser
        .then(data => {
            if (data) {
                const updatedUser = User.findOneAndUpdate({ email }, { $set: { token: "" } }, { new: true })
                updatedUser.then(data => {
                    res.header('jwt', "");
                    res.json({
                        error: "Logout Success",
                        success: null,
                    })
                })
            } else {
                res.json({
                    error: "Email is wrong.",
                    success: null,
                })
            }
        })
        .catch((err) => {
            res.json({
                ...err,
                success: null,
            })
        })
}

export default LogOut;