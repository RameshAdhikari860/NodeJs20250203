import authService from "../services/authService.js";

const login = (data) => {
    return authService.login(data);
}


export { login }