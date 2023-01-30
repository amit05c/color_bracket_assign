const express= require("express")
const { register, Login } = require("../controllers/userControllers")

const userRouter= express.Router()

userRouter.post("/register",register)
userRouter.post("/login",Login)
module.exports={
    userRouter
} 