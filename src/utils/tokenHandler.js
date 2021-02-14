import jwt from "jwt-simple"

const tokenEncode = (id) => {
    return jwt.encode({ id }, process.env.SECRET);
};

const tokenDecode = (token) => {
    return jwt.decode(token, process.env.SECRET);
};

export { tokenEncode, tokenDecode };