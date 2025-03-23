import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "../constants/roles.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const createUser = async (data) => {
    return await User.create(data);
}



const createMerchant = async (data) => {

    const user = await User.findOne({
        $or: [{ email: data.email }, { phone: data.phone }]
    })
    if (user) {
        throw {
            statusCode: 409,
            message: "user already exists"
        }
    }
    const hashedPassword = bcrypt.hashSync(data.password);


    // return await User.create({ ...data, roles: [ROLE_USER, ROLE_MERCHANT] })
    return await User.create({
        name: data.name,
        password: hashedPassword,
        email: data.email,
        address: data.address,
        phone: data.phone,
        roles: [ROLE_USER, ROLE_MERCHANT]
    })

}

const updateUser = async (id, data) => {
    const updateData = {
        name: data.name,
        address: data.address,
        phone: data.phone
    }
    if (data.password) updateData.password = bcrypt.hashSync(data.password);

    return await User.findByIdAndUpdate(id,
        updateData
        , {
            new: true
        })
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

const getAllUser = async () => {
    return await User.find();
}
const getUserById = async (id) => {
    return await User.findById(id);
}

const getAllCustomer = async (params) => {
    return await User.find({
        roles: [ROLE_USER]
    })
};

export default { getAllCustomer, createUser, createMerchant, updateUser, deleteUser, getAllUser, getUserById }; 