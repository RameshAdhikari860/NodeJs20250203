const logger = (req, res, next) => {
    console.log("hello from logger")
    console.log(`Method :${req.method} & Url : ${req.originalUrl}`);
    if (req.method === "PATCH") {
        return res.status(405).send("Patch method not allowed");
    } else {
        next();
    }







}


export default logger;