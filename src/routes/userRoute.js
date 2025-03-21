import express from "express";
import auth from "../middlewares/auth.js"
import { createMerchant, createUser, deleteUser, getAllUser, getUserById, updateUser } from "../controllers/userController.js"
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_ADMIN, ROLE_MERCHANT } from "../constants/roles.js";

const router = express.Router();

router.post('/', createUser);

router.post('/merchant', auth, roleBasedAuth(ROLE_ADMIN), createMerchant);
router.get('/', auth, roleBasedAuth(ROLE_MERCHANT), getAllUser)
router.get('/:id', auth, getUserById)
router.put('/:id', auth, roleBasedAuth(ROLE_ADMIN), updateUser);
router.delete('/:id', auth, roleBasedAuth(ROLE_ADMIN), deleteUser)

export default router;