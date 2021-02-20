const LogOut = (req, res) => {
    res.header('auth-token', "");
    res.json({
        error: null,
        success: {
            message: "Logout Success",
        }
    })
}

export default LogOut;