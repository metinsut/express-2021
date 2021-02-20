const TokenCheck = (req, res) => {
    res.json({
        error: null,
        success: {
            auth: true,
            user: req.user
        },
    })
}

export default TokenCheck;