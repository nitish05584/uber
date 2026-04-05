const jwt=require("jsonwebtoken")


const genToken=async(userId)=>{
    try {
        const token=await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'7d'})
        return token
    } catch (error) {
        console.log(error)
    }

}
   
const generateAuthToken=async(captId)=>{
    try {
        const token=await jwt.sign({captId},process.env.JWT_SECRET,{expiresIn:"10"})
        return token
    } catch (error) {
        console.log(error)
    }
}




    module.exports={
        genToken,
        generateAuthToken,
    }