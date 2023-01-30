const { ProcessModel } = require("../models/process.model")


const addProcess= async(req,res)=>{
    try{
    
       let newProcess= ProcessModel(req.body)
       await newProcess.save()
       res.status(201).send({
        status:"success",
        data:newProcess
       })
    }
    catch(err){
        res.status(400).send({
            status:"error",
            data:err.message
           })
    }
}

const getProcessData=async(req,res)=>{
    try{
        console.log(req.params)
        let getData= await ProcessModel.findById(req.params)
        
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
    getProcessData,
    addProcess
}