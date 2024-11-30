import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://deepakdeep6709:deepakbhtoye@cluster0.kidde.mongodb.net/food-delivery').then(()=>console.log("DB Connected"))
}

// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.