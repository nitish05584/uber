
const jwt=require("jsonwebtoken")


const authUser=async(req,res,next)=>{
    try {
       const {token}=req.cookies
       if(!token){
         return res.status(400).json({message:"user does not have a token"})
       } 
      
       const verifyToken=jwt.verify(token,process.env.JWT_SECRET)
       if(!verifyToken){
         return res.status(400).json({message:"user does not have a token"})
       }
       req.userId=verifyToken.userId
       next()
    } catch (error) {
         console.error("isAuth error");
    return res.status(500).json({ message: " authUser is auth error" });
    }
}



const authCaptain=async(req,res,next)=>{
    try {
        const {token}=req.cookies
       if(!token){
         return res.status(401).json({message:"Unauthorized"})
       } 

       const verifyToken=jwt.verify(token,process.env.JWT_SECRET)
       if(!verifyToken){
         return res.status(401).json({message:"Unauthorized"})
       }
       req.captId=verifyToken.captId
       next()
    } catch (error) {
     return res.status(401).json({ message: "Unauthorized" });
    }
}

module.exports={
   authUser,
    authCaptain,
}