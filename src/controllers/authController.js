import authService from "../services/authService.js";

const login = async (req, res) => {
    try {
        const { email, phone, password } = req.body;
        if (!email && !phone) return res.status(422).send("Email or phone is required");
        if (!password) return res.status(423).send("Password required");
        const data = await authService.login(req.body);
        res.cookie("userId", data._id);
        res.status(200).send(data);
    } catch (error) {

        res.status(500).send(error.message);
    }
}

const register = async (req, res) => {
    try {
        const { email, name, confirmPassword, address, phone, password } = req.body;

        if (!email) return res.status(423).send("email required");
        if (!name) return res.status(423).send("email name");
        if (!password) return res.status(423).send("Password required");
        if (!confirmPassword) return res.status(423).send("confirmPassword required");
        if (!address) return res.status(423).send("address required");
        if (!phone) return res.status(423).send("phone required");
        if (password != confirmPassword) {
            return res.status(454).send("Password DOnt Match");
        }

        const data = await authService.register(req.body);

        res.status(200).json(data)
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: "validation Error",
                error: error.message
            })
        }
        res.status(500).json({
            message: "error occured at register controller",
            error: error.message
        })
    }
}

export { login, register }