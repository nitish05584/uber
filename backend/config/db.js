const mongoose=require("mongoose")

const connectDB=async()=>{
    try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected successfully".bgCyan) 
    } catch (error) {
        console.log(error);
    }
}
module.exports=connectDB