import mongoose from "mongoose";


export default async function connectDb() {
    //database Connection
    try {
        const status = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`mongodb connected: ${status.connection.host}`)
    } catch (error) {
        console.log(`DB Error : ${error.message}`)
        process.exit(1);
    }

}