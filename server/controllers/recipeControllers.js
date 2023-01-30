const { IngredientModel } = require("../models/ingredient.model")
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


const getRecipe= async(req,res)=>{
  try{
    let getData= await RecipeModel.find().populate('creatorId','-password -__v').select("-__v")
    // let getIngred= await IngredientModel.find().populate("recipeId")
    
    // let getData= await RecipeModel.aggregate(
    //   {
    //     $lookup: {
    //       from: 'user',
    //       localField: 'creatorId',
    //       foreignField: '_id',
    //       as: 'user'
    //     }
    //   })
    // // let rec
    // for(let i=0; i<getData.length; i++){
    //    for(let j=0; j<getIngred.length; j++){
    //     if(getData[i]['_id']==getIngred[j])
    //    }
    // }
    res.status(201).send({
      status:"success",
      data:getData
     })
  }
  catch(err){
    console.log(err)
  }
}

const singleRecipe=async(req,res)=>{
  try{
    // console.log(req.params)
    let getData= await RecipeModel.findById(req.params).populate('creatorId','-password -__v').select("-__v").populate('Ingredients','-__v').populate('process','-__v')
    
    res.status(201).send({
     status:"success",
     data:getData
    })
  }
  catch(err){
    res.status(400).send({
      status:"error",
      data:err.message
     })
  }
}

module.exports={
    recipe,
    getRecipe,
    singleRecipe
}