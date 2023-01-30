const express= require("express")
const { recipe, getRecipe, singleRecipe } = require("../controllers/recipeControllers")
const recipeRouter= express.Router()

recipeRouter.post("/",recipe)
recipeRouter.get("/all",getRecipe)
recipeRouter.get("/single/:_id",singleRecipe)

module.exports={
    recipeRouter
}