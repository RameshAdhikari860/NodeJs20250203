import Product from "../models/Product.js";


const getAllProducts = async (query) => {

    const sort = JSON.parse(query.sort || "{}")
    const limit = query.limit
    const offset = query.offset
    const filters = {};

    const { category } = query
    if (category) filters.category = category;

    const products = await Product.find()
        .sort(sort)
        .limit(limit)
        .skip(offset);
    return products;
}

const getProductById = (id) => {
    const product = Product.findById(id);
    return product;
}

const createProduct = async (data, userId) => {
    return await Product.create({ ...data, createdBy: userId });
}
const deleteProduct = async (id) => {
    const isProductAvailable = await Product.findById(id);
    if (!isProductAvailable) return false;
    const product = await Product.findByIdAndDelete(id);
    return product;
}
const updateProduct = async (id, data) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
}
const getCategories = async () => {
    return await Product.distinct("category");
};

export default { getCategories, createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };