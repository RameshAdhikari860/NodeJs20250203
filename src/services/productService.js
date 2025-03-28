import Product from "../models/Product.js";


const getAllProducts = async (query, userId) => {

    const sort = JSON.parse(query.sort || "{}")
    const limit = query.limit
    const offset = query.offset

    // filters ************************
    const filters = {};

    const { category, brands, name, min, max, createdBy } = query
    if (category) {
        const categories = category.split(",");
        filters.category = {
            $in: categories
        }
    }

    if (brands) {
        const brandItems = brands.split(",")
        filters.brand = {
            $in: brandItems
        }
    }
    if (name) {
        filters.name = {
            $regex: name, $options: "i"
        }
    }
    if (min) filters.price = { $gte: parseFloat(min) };
    if (max) filters.price = { ...filters.price, $lte: parseFloat(max) };

    if (userId) filters.createdBy = userId


    // filters end *************************
    const products = await Product.find(filters)
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