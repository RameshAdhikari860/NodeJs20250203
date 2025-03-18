function auth(req, res, next) {
    console.log("Auth middle ware");
    const cookie = req.header.cookie;
    if (!cookie) return "User not authenticated";

    next();

}

export default auth;