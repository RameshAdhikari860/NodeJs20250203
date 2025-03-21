import mongoose from "mongoose"
import { emailRegex, passwordRegex } from "../constants/regex.js"
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "../constants/roles.js";

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
        validate: {
            validator: (value) => {
                return emailRegex.test(value);
            },
            message: "Not correct format email"
        }
    },
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
        // validate: {
        //     validator: (value) => {
        //         return passwordRegex.test(value);
        //     },
        //     message: "password should contain at least 8 letter 1 small 1big 1num 1special"
        // }
    },
    roles: {
        type: [String],
        default: ["USER"],
        enum: [ROLE_USER, ROLE_ADMIN, ROLE_MERCHANT]
    }
})
const model = mongoose.model("User", userSchema)
export default model;