import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected : ${conn.connection.host}`)
    }
    catch (error) {
        console.log(`ERROR AA GYA HAI: ${error.message}`)
        process.exit(1)         // exit with failure
    }
}

export default connectDB