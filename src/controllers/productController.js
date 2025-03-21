import productService from "../services/productService.js";

const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();
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
    try {
        const data = await productService.createProduct(req.body);
        res.status(200).send("created success" + data);
    } catch (error) {
        res.status(500).send(error.message);
    }

}
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const product = await productService.updateProduct(id, data);
        console.log(product)
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.status(200).json({ message: 'Product updated', product });
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const deleteProduct = async (req, res) => {

    try {
        const id = req.params.id;

        const condition = await productService.deleteProduct(id);
        if (!condition) return res.status(404).send("Product Not found");
        res.status(200).json({
            message: "Product deleted successfully"
        })
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