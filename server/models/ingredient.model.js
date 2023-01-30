const mongoose = require("mongoose");
const ingredientSchema = new mongoose.Schema({
  item: {
    type: String,
    required: [true, "Indegredient must have a item name"],
    trim: true,
  },
  amount: {
    type: Number,
    required: [true, "Indegredient must have a some amount value"]
  },
  unit: {
    type: String,
    required: [true, "Indegredient must have a unit"],
    enum : ['piece','gm','kg','l','ml','mg'],
    trim: true
  },

  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "recipe",
    required: [true, "Indegredient must have a recipeId"]
  },
},
{
  toJSON: { virtuals: true },
   toObject: { virtuals: true }
}
);


const IngredientModel = mongoose.model("ingredient", ingredientSchema);

module.exports = {
    IngredientModel
};
