const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "user must have a name"],trim: true, },
  userId: {
    type: String,
    required: [true, "user must have a userid"],
    trim: true,
    maxlength: [7, "A userId max have 7 character"],
    minlength: [3, 'A userId must have lessthan or equal then 3 characters'],
    unique:[true,'userid not availabe, please choose another']
  },
  password:{type: String, required:[true, "User must have a password"],trim: true,}
});

const UserModel= mongoose.model("user",userSchema)

module.exports={
      UserModel
}
