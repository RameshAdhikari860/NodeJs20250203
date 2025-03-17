import express from "express";
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
router.post("/", createProduct)
router.get("/categories", getCategories)
router.delete("/:id", deleteProduct)
router.put("/:id", updateProduct)
router.get("/:id", getProductById)


export default router;