const { UserModel } = require("../models/user.model")
const bcrypt = require('bcryptjs');
const { passGenerator } = require("../utils/password");
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
            error:"userid not availabe, please choose another"
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
        error:err.message
       })
    }
}

module.exports={
    register
}