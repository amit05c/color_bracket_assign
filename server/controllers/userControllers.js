const { UserModel } = require("../models/user.model")
const bcrypt = require('bcryptjs');
const { passGenerator, checkPassword } = require("../utils/password");
const { generateToken } = require("../utils/generateToken");
const register= async(req,res)=>{
    try{
    let {name,userId,password}= req.body
    let checkUserId= await UserModel.findOne({userId:req.body.userId}).select("-password -__v")
    //   console.log(checkUserId)
    console.log(checkUserId)
    if(checkUserId){
        console.log(checkUserId)
        return  res.status(400).send({
            status:"fail",
            Error:"userid not availabe, please choose another"
        })
    }
    let passwordGen= await passGenerator(password)
      let newUser= UserModel({name,userId,password:passwordGen})
      
      await newUser.save()
      res.status(200).send({
        status:"success",
         message: newUser
      })
    }
    catch(err){
      console.log(err)
       res.status(400).send({
        status:"fail",
        Error:err.message
       })
    }
}

const Login= async(req,res)=>{
  try{
    let { userId, password } = req.body;
    // console.log(req.body)
    let findUser = await UserModel.findOne({ userId }).select("-__v");
    
    // console.log(findUser)
    if (!findUser) {
      return res.status(400).send({ Error: "User not registered" });
    }
    const checkPass = await checkPassword(password, findUser.password);
    //  console.log(checkPass)
    // if password matched
    if (!checkPass) {
      return res.status(400).send({ Error: "Wrong password" });
    }
    let user = await UserModel.findOne({ userId }).select("-password -__v");
    const token = generateToken(findUser._id, findUser.name);
    console.log(token)
    res.status(201).json({
      status: "success",
      data: {
        user,
        token,
      },
    });
  }
  catch(err){
    res.status(400).json({
      status: "error",
      Error: err.message
    });
  }
}

module.exports={
    register,
    Login
}