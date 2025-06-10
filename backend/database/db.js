// ILl5EPmAbxUXi5Dl
import mongoose from "mongoose";
const connectDb=async()=>{
    try{
await  mongoose.connect(process.env.MONGO_URI,{
    dbName:"ChatbotMern"
})

console.log("mongdb connected")
    }
    catch(err){
        console.log(err)
    }
}
export default connectDb