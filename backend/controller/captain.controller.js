const { generateAuthToken } = require("../config/token");
const captainModel = require("../models/captain.model");

const bcrypt=require("bcrypt")

const registerCaptain=async(req,res)=>{
    try {
 
    const { fullname, email, password, vehicle } = req.body;

        const isCaptainAlreadyExist = await captainModel.findOne({ email });


    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain already exist' });
    }
     
    const hashedPassword=await bcrypt.hash(password,10)

   const captain = await captainModel.create({
    fullname: {
        firstname: fullname.firstname,
        lastname: fullname.lastname
    },
    email,
    password: hashedPassword,
    vehicle: {
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    }
});

    const token=await generateAuthToken(captain._id);

       res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
       });

          res.status(201).json({captain,token});


    } catch (error) {
         console.error(error);
    return res.status(500).json({ message: " captain Register error" });
    }

}


const loginCaptain=async(req,res)=>{
    try {
          const { email, password } = req.body;

              const captain = await captainModel.findOne({ email }).select('+password');

                 if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    const isMatch=await bcrypt.compare(password,captain.password)

    if(!isMatch){
         return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token=await generateAuthToken(captain._id) 
       
     res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
       });


         res.status(200).json({captain,token});


    } catch (error) {
         console.error(error);
    return res.status(500).json({ message: " captain login error"}) 
    }
}


const getCaptainProfile=async(req,res)=>{
    try {
        const captain=await captainModel.findById(req.captId).select("-password")
        if(!captain){
          return res.status(404).json({message:"user is not found"})  
        }
         return res.status(200).json(captain);
    } catch (error) {
         console.error(error);
    return res.status(500).json({ message: " getcaptain  error"}) 
    }
}


 const logoutCaptain=async(req,res)=>{
    try {
         res.clearCookie("token")
          return res.status(200).json({ 
      message:"captain logout successfully" 
    });
    } catch (error) {
          console.error(error);
    return res.status(500).json({ message: " getcaptain logout error"})
    }
 }



module.exports={
    registerCaptain,
    loginCaptain,
    getCaptainProfile,
    logoutCaptain
}