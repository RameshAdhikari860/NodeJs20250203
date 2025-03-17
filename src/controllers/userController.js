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


const getAllUser = async (req, res) => {
    try {
        const users = await userService.getAllUser();
        res.status(200).json({
            message: "All users ",
            Users: users
        })
    } catch (error) {
        res.status(500).json({
            message: "error to get users",
            error: error
        })
    }

}

export { createUser, getAllUser };