
import { ROLE_ADMIN, ROLE_MERCHANT } from "../constants/roles.js";
import { formatUserData } from "../helpers/dataFormatter.js";
import userService from "../services/userService.js";

const createUser = async (req, res) => {
    try {
        const body = req.body;
        const user = await userService.createUser(body);
        res.status(200).json({
            message: "User Created",
            userInfo: user
        });
    } catch (error) {
        res.status(500).json({
            message: "error occured",
            error: error.message
        })
    }
}


// create merchant code
const createMerchant = async (req, res) => {
    try {
        const data = req.body;
        if (!data.email || !data.name || !data.confirmPassword || !data.password || !data.phone || !data.address) {
            throw new Error("All fields (email, name, confirmPassword, password, phone, and address) are required.");

        }
        const user = await userService.createMerchant(req.body);
        res.json(user);
    } catch (error) {
        res.status(error.statusCode || 500).send(error.message);
    }
}

const updateUser = async (req, res) => {

    const user = await userService.updateUser(req.params.id, req.body);
    if (!user) {
        res.status(500).send("error in update")
    }
    res.status(200).send(user);


}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const users = await userService.deleteUser(id);
        res.status(200).send("successful delete")
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const getUserById = async (req, res) => {
    try {
        const loggedInUser = req.user;
        const id = req.params.id;
        const user = await userService.getUserById(id);

        if (!user) return res.status(404).send("user not found")
        if (loggedInUser.id != user.id && !loggedInUser.roles.includes(ROLE_MERCHANT)) {
            throw new Error("Access Denied");

        }

        const formattedData = formatUserData(user);


        res.status(200).send(formattedData);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllUser = async (req, res) => {
    try {
        const users = await userService.getAllUser();

        const formattedUser = users.map((user) => formatUserData(user));

        res.status(200).json({
            message: "All users ",
            Users: formattedUser
        })
    } catch (error) {
        res.status(500).json({
            message: "error to get users",
            error: error
        })
    }

}

const getAllCustomer = async (req, res) => {
    try {
        const users = await userService.getAllCustomer()
        console.log(users)
        const formattedUser = users.map((user) => { formatUserData(user) })
        console.log(formattedUser)
        res.status(200).json({
            message: "all customers",
            customers: formattedUser
        })
    } catch (error) {
        res.status(500).send("Customer search error")
    }
}

export { createUser, getAllUser, createMerchant, updateUser, deleteUser, getUserById, getAllCustomer };