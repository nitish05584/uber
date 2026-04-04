
const { genToken } = require("../config/token")
const User = require("../models/user.model")

const bcrypt=require("bcrypt")
const validator = require("validator");

const registerUser=async(req,res)=>{
    try {
        const {fullname,email,password}=req.body

         if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }


        const isUserAlready=await User.findOne({email})
        if(isUserAlready){
            return res.status(400).json({ message: 'User already exist' }); 
        }
        const hashedPassword=await bcrypt.hash(password,10)

        const user=await User.create({fullname,email,password:hashedPassword})


        const token=await genToken(user._id)


     res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
       });

       return res.status(201).json(user)

    } catch (error) {
       console.error(error);
    return res.status(500).json({ message: "Register error" }); 
    }
}


const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body

        const user=await User.findOne({email}).select('+password')
        if(!user){
           return res.status(401).json({ message: 'Invalid email or password' }); 
        }

        const isMatch=await  bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Incorrect password"})
        }
        const token=genToken(user._id)
           res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
         return res.status(200).json(user);

    } catch (error) {
         console.error(error);
    return res.status(500).json({ message: "login error" }); 
    }
}

const logout=async(req,res)=>{
    try {
        res.clearCookie("token")
          return res.status(200).json({ 
      message:"logout successfully" 
    });
    } catch (error) {
        console.error(error);
    return res.status(500).json({ message: "logout error" }); 
    }
}

const getUserProfile=async(req,res)=>{
    try {
       let user=await User.findById(req.userId).select("-password") 

         if(!user){
          return res.status(404).json({message:"user is not found"})  
        }
         return res.status(200).json(user);
    } catch (error) {
                console.log(error)
       return res.status(500).json({message:"getcurrent user error"}) 
    }
}




module.exports={
    registerUser,
    loginUser,
    logout,
    getUserProfile
}