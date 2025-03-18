import authService from "../services/authService.js";

const login = async (req, res) => {
    const data = await authService.login(req.body);
    res.cookie("userId", data._id);
    res.status(200).send(data);
}


export { login }