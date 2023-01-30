const { IngredientModel } = require("../models/ingredient.model")

const ingredient=async(req,res)=>{
  try{
       let newRecipe= IngredientModel(req.body)
       await newRecipe.save()
       res.status(201).send({
        status:"success",
        data:newRecipe
       })
       
  }
  catch(err){
    console.log(err.message)
    res.status(400).send({
      status:"error",
      data:err.message
     })
  }
}


const getData= async(req,res)=>{
    try{
    let getRecipe=await IngredientModel.find().populate('recipeId','-creatorId -__v').select('-__v -id')

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