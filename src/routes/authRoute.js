import express from "express";
import { login, register } from "../controllers/authController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);



// router.post("/test", auth, (req, res) => {
//     res.send("test auth token");
// })
export default router