const express= require("express")
const { recipe } = require("../controllers/recipeControllers")
const recipeRouter= express.Router()

recipeRouter.post("/",recipe)
module.exports={
    recipeRouter
}