const express= require("express")
const { register } = require("../controllers/userControllers")
const userRouter= express.Router()

userRouter.post("/register",register)
module.exports={
    userRouter
}