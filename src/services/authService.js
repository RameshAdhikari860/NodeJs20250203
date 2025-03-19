import User from '../models/User.js'
import bcrypt from 'bcryptjs';

const login = async (data) => {


    const user = await User.findOne({
        $or: [
            { email: data.email },
            { phone: data.phone }
        ]
    })

    if (!user) throw new Error("User not found");
    const isPasswordMatched = bcrypt.compareSync(data.password, user.password);
    if (!isPasswordMatched) {
        throw {
            statusCode: 400,
            message: "incorrect password"
        }
    }
    return user;
}


const register = async (data) => {

    const user = await User.findOne({
        $or: [
            { email: data.email },
            { phone: data.phone }
        ]
    })
    if (user) throw new Error("User already Exists");

    const hashedPassword = bcrypt.hashSync(data.password);
    return await User.create({
        name: data.name,
        address: data.address,
        phone: data.phone,
        email: data.email,
        password: hashedPassword,
        roles: data.roles

    })
}

export default { login, register };