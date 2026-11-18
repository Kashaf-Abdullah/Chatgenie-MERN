import express from 'express'
import dotenv from 'dotenv'
import connectDb from './database/db.js'
import cors from 'cors'
dotenv.config()
const app=express()
//middleware 
app.use(express.json())
// app.use(cors({
//   origin: 'http://localhost:5173', // or whatever port your React app runs on
//   credentials: true
// }));
app.use(cors())
//importing routes
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)

const startServer = async () => {
    try {
        const requiredEnvVars = ["Activation_Sec", "Jwt_sec", "Gmail", "Gmail_App_Password"];
        const missingEnvVars = requiredEnvVars.filter((name) => !process.env[name]);
        if (missingEnvVars.length > 0) {
            throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}. Add them to backend/.env.`);
        }

        await connectDb();
        app.listen(5000, () => {
            console.log("server is running at 5000 port");
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exitCode = 1;
    }
};

startServer();