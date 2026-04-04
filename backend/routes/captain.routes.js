const express=require("express");
const { registerCaptain, loginCaptain } = require("../controller/captain.controller");


const captainRoutes=express.Router();


captainRoutes.post("/register",registerCaptain)

captainRoutes.post("/login",loginCaptain)



module.exports=captainRoutes