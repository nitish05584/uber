const express=require("express");
const { registerUser, loginUser, getUserProfile, logout } = require("../controller/user.controller");
const { authUser } = require("../middleware/auth.middleware");




const userRoutes=express.Router();

userRoutes.post("/register",registerUser)

userRoutes.post("/login",loginUser)

userRoutes.get('/profile',authUser,getUserProfile)

userRoutes.get('/logout',authUser,logout)


module.exports=userRoutes