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

const router = express.Router();

router.get("/", getAllProducts)
router.post("/", auth, createProduct)
router.get("/categories", getCategories)
router.delete("/:id", auth, deleteProduct)
router.put("/:id", auth, updateProduct)
router.get("/:id", getProductById)


export default router;