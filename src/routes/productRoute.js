import express from "express";
import auth from "../middlewares/auth.js";
import {
    getAllProducts,
    updateProduct,
    deleteProduct,
    createProduct,
    getProductById,
    getCategories
} from "../controllers/productController.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js";
import { ROLE_ADMIN, ROLE_MERCHANT } from "../constants/roles.js";

const router = express.Router();

router.get("/", getAllProducts)
router.post("/", auth, roleBasedAuth(ROLE_MERCHANT), createProduct)
router.get("/categories", getCategories)
router.delete("/:id", auth, roleBasedAuth(ROLE_ADMIN), deleteProduct)
router.put("/:id", auth, roleBasedAuth(ROLE_MERCHANT), updateProduct)
router.get("/:id", getProductById)


export default router;