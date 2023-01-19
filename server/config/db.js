const mongoose= require("mongoose")
require("dotenv").config()
mongoose.set('strictQuery', true);
const DB= process.env.MONGO_URL.replace('<password>',process.env.PASSWORD)
const connection= mongoose.connect(DB)
module.exports={
    connection
}