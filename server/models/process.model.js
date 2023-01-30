const mongoose = require("mongoose");
const processSchema = new mongoose.Schema({
  step: {type: String, required:[true, "Receipe must have a description"]},

  recipeId: {
    type: mongoose.Schema.Types.ObjectId, ref:"recipe",
    required: [true, "process must have a recipeId"],
    trim: true,
  },
 
},
{
  toJSON: { virtuals: true },
   toObject: { virtuals: true }
}
);

// processSchema.virtual('Ingredients',{
//   ref:'ingredient',
//   foreignField:'recipeId',
//   localField:'_id'
// })

const ProcessModel= mongoose.model("process",processSchema)

module.exports={
    ProcessModel
}
