const express=require("express");
const { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } = require("../controller/captain.controller");
const { authCaptain } = require("../middleware/auth.middleware");


const captainRoutes=express.Router();


captainRoutes.post("/register",registerCaptain)

captainRoutes.post("/login",loginCaptain)
 
captainRoutes.get("/profile",authCaptain,getCaptainProfile)

captainRoutes.get("/logout",authCaptain,logoutCaptain)



module.exports=captainRoutes