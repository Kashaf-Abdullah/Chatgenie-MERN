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

app.listen(5000,()=>{
    console.log("server is running at 5000 port")
    connectDb()
})