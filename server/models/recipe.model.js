const mongoose = require("mongoose");
const recipeSchema = new mongoose.Schema({
  name: { type: String, required: [true, "user must have a name"],trim: true, },
  description: {type: String, required:[true, "Receipe must have a description"],maxlength: [30, "A userId max have 7 character"],
  minlength: [10, 'A userId must have lessthan or equal then 3 characters'],},
  image:{type: String, required:[true, "User must have a image"],trim: true},

  creatorId: {
    type: mongoose.Schema.Types.ObjectId, ref:"user",
    required: [true, "user must have a userid"],
    trim: true,
    maxlength: [7, "A userId max have 7 character"],
    minlength: [3, 'A userId must have lessthan or equal then 3 characters'],
    unique:[true,'userid not availabe, please choose another']
  },
},
{
  toJSON: { virtuals: true },
   toObject: { virtuals: true }
}
);

recipeSchema.virtual('Ingredients',{
  ref:'ingredient',
  foreignField:'recipeId',
  localField:'_id'
})

recipeSchema.virtual('process',{
  ref:'process',
  foreignField:'recipeId',
  localField:'_id'
})

const RecipeModel= mongoose.model("recipe",recipeSchema)

module.exports={
    RecipeModel
}
