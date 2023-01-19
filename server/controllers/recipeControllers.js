const { RecipeModel } = require("../models/recipe.model")

const recipe=async(req,res)=>{
  try{
       let newRecipe= RecipeModel(req.body)
       await newRecipe.save()
       res.send(newRecipe)
       
  }
  catch(err){
    console.log(err.message)
     res.send()
  }
}
module.exports={
    recipe
}