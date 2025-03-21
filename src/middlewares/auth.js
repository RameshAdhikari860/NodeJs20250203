import { verifyJWT } from "../utils/jwt.js";

function auth(req, res, next) {
    // console.log("Auth middle ware");
    const cookie = req.headers.cookie;
    if (!cookie) return res.status(401).send("User not authenticated");

    const authToken = cookie.split("=")[1];

    verifyJWT(authToken).then((data) => {
        req.user = data;
        next();
    }).catch((error) => {
        res.status(400).send("invalid Token" + error.message);
    });



}

export default auth;