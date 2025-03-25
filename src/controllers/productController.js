import { ROLE_ADMIN } from "../constants/roles.js";
import productService from "../services/productService.js";

const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts(req.query);
    res.json(products);
}
const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productService.getProductById(id);
        if (!product) {
            const error = new Error('Product not found');
            error.status = 404; // Set the status code to 404 Not Found
            throw error;
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send("Error occured: " + error.message);
    }
}

const createProduct = async (req, res) => {
    const userId = req.user.id;
    try {
        const data = await productService.createProduct(req.body, userId);
        res.status(200).send("created success" + data);
    } catch (error) {
        res.status(500).send(error.message);
    }

}
const updateProduct = async (req, res) => {
    try {
        const user = req.user;

        const id = req.params.id;
        const data = req.body;
        const product = await productService.updateProduct(id, data);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        if (product.createdBy != user.id && !user.roles.includes(ROLE_ADMIN)) {

            return res.status(403).send("Access Denied");
        }

        res.status(200).json({ message: 'Product updated', product });
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const deleteProduct = async (req, res) => {

    try {
        const id = req.params.id;
        const user = req.user;

        const condition = await productService.deleteProduct(id);
        if (!condition) return res.status(404).send("Product Not found");
        res.status(200).json({
            message: "Product deleted successfully"
        })
        console.log(condition)

        if (user.id != condition.createdBy && !user.roles.includes(ROLE_ADMIN)) {
            return res.status(403).send("Action not allowed");
        }

    } catch (error) {
        res.status(500).send(`error: ${error.message}`);
    }

}

const getCategories = async (req, res) => {
    try {
        const categories = await productService.getCategories();

        res.status(200).json(categories);
    } catch (error) {

        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};


export { getCategories, getAllProducts, createProduct, updateProduct, deleteProduct, getProductById }