const SpecialPostsController = async (req, res, next) => {
    res.json({
        success: {
            posts: ["special post1", "special post2"]
        },
        error: null
    })
};

export default SpecialPostsController;