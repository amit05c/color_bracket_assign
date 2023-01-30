const express= require("express")
const cors= require("cors")
const { connection } = require("./config/db")
const { userRouter } = require("./Routes/userRoute")
const { recipeRouter } = require("./Routes/recipeRouter")
const { ingredientRouter } = require("./Routes/ingredientRouter")
const { processRouter } = require("./Routes/processRouter")
require("dotenv").config()
const app= express()
const PORT= process.env.PORT
app.use(cors())
app.use(express.json())

app.use("/user",userRouter)
app.use("/recipe",recipeRouter)
app.use("/ingredients",ingredientRouter)
app.use("/process",processRouter)

app.listen(PORT,async()=>{
    try {
        await connection
        console.log("DB conndected")
    } catch (error) {
        console.log(error)
    }

    console.log(`server listerning on port ${PORT}`)
})
