import Product from "../models/Product.js";


const getAllProducts = async () => {
    const products = await Product.find();
    return products;
}

const getProductById = (id) => {
    const product = Product.findById(id);
    return product;
}

const createProduct = async (data) => {
    return await Product.create(data);
}
const deleteProduct = async (id) => {
    const product = await Product.findByIdAndDelete(id);
    return product;
}
const updateProduct = async (id, data) => {
    await Product.findByIdAndUpdate(id, data, { new: true });
}
const getCategories = async () => {
    return await Product.distinct("category");
};

export default { getCategories, createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };