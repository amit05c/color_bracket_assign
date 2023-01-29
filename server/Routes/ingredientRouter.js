const express= require("express")
const { ingredient, getData } = require("../controllers/ingredientControllers")
const ingredientRouter= express.Router()

ingredientRouter.post("/",ingredient)
ingredientRouter.get("/",getData)
module.exports={
    ingredientRouter
}