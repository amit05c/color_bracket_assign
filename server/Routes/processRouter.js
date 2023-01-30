const express= require("express")
const { addProcess, getProcessData } = require("../controllers/processController")
const processRouter= express.Router()

processRouter.post("/add",addProcess)
processRouter.get("/addprocess/:_id",getProcessData)
module.exports={
    processRouter
}