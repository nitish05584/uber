const express = require('express');

const color=require('colors');
 
const cors=require("cors")

const cookieParser=require("cookie-parser")


const dotenv=require("dotenv");
const connectDB = require('./config/db');

const userRoutes = require('./routes/user.routes');






dotenv.config()
connectDB()


const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(cookieParser());

app.use(cors());





app.use("/users",userRoutes);




const port=process.env.port||8000

app.listen(port,()=>{
    console.log(`server is running on ${port} `.bgMagenta)
})