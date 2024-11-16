import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL; 

export const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${con.connection.host}`);
    } catch (error) {
        console.log("Failed to connect with MongoDB", error);
        process.exit(1); 
    }
};
