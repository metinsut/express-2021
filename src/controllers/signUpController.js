import User from "../models/user.js"

const SignUp = (req, res) => {
    const { email, password } = req.body
    const findUser = User.findOne({ email })
    findUser
        .then(async (data) => {
            if (data) {
                res.json({
                    error: 'Email is in use',
                    success: null,
                });
            } else {
                const user = await new User({
                    email,
                    password,
                });
                const saveUser = user.save()
                saveUser
                    .then((userData) => {
                        res.status(201).json({
                            error: null,
                            success: {
                                email: userData.email,
                            },
                        })
                    })
                    .catch((err) => {
                        res.json({
                            ...err,
                            success: null,
                        })
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

export default SignUp;