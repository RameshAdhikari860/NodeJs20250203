import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    brand: String,
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    rating: {
        type: Number,
        default: 5,
        min: 0,
        max: 5
    },
    description: {
        type: String
    },
    imageUrls: {
        type: [String],
    }
});
const model = mongoose.model("Product", productSchema)
export default model;