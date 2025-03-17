import express from "express";
import auth from "../middlewares/auth.js"
import { createUser, getAllUser } from "../controllers/userController.js"

const router = express.Router();

router.post('/', createUser);
router.get('/', auth, getAllUser);

export default router;