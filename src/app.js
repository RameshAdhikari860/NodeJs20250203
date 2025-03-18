import express from "express";
import dotenv from "dotenv";
import productRoute from "../src/routes/productRoute.js"
import userRoute from "../src/routes/userRoute.js"
import bodyParser from "body-parser";
import connectDb from "./config/database.js";
import logger from "./middlewares/logger.js";
import authRoute from "../src/routes/authRoute.js";


const app = express();
dotenv.config();
app.use(logger);
connectDb();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const PORT = process.env.PORT || 5000;


app.use("/api/products", productRoute)
app.use("/api/users", userRoute)
app.use("/api/auth/login", authRoute);


app.listen(PORT, () => {
    console.log("Server started at PORT " + PORT)
})    