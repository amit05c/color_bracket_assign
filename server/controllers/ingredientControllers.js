const { IngredientModel } = require("../models/ingredient.model")

const ingredient=async(req,res)=>{
  try{
       let newRecipe= IngredientModel(req.body)
       await newRecipe.save()
       res.send(newRecipe)
       
  }
  catch(err){
    console.log(err.message)
     res.send()
  }
}


const getData= async(req,res)=>{
    try{
    let getRecipe=await IngredientModel.find().populate('recipeId')
         res.send(getRecipe)
        
   }
   catch(err){
     console.log(err.message)
      res.send()
   }
}
module.exports={
    ingredient,
    getData
}