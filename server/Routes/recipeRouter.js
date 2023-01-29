const express= require("express")
const { recipe, getRecipe } = require("../controllers/recipeControllers")
const recipeRouter= express.Router()

recipeRouter.post("/",recipe)
recipeRouter.get("/",getRecipe)

module.exports={
    recipeRouter
}