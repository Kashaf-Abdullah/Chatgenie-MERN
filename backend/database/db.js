// ILl5EPmAbxUXi5Dl
import mongoose from "mongoose";

const connectDb = async () => {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error("MONGO_URI is missing. Add it to backend/.env (see backend/.env.example).");
    }

    await mongoose.connect(uri, {
        dbName: "ChatbotMern"
    });

    console.log("MongoDB connected");
};

export default connectDb