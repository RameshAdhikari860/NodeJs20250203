import mongoose from "mongoose"
import { emailRegex, passwordRegex } from "../constants/regex.js"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        city: String,
        country: String,
        province: String,
        street: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        // validate: {
        //     validator: (value) => {
        //         return emailRegex.test(value);
        //     },
        //     message: "Not correct format email"
        // }
    },
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        default: "customer"
    }
})
const model = mongoose.model("User", userSchema)
export default model;