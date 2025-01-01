import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://pangamrenuka15:renu123@cluster0.gc3xw.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}