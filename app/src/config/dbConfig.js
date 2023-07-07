const mongoose = require("mongoose")
require('dotenv').config()
//const MONGO_URI = process.env.MONGO_URI
const {MONGO_URI} = process.env 

module.exports.getDbConnection = function(){ 
    mongoose.connect("mongodb+srv://shahabhi1411:Abhi0273@cluster0.3drxg0m.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("DbConnected")).
    catch((err)=>console.log(err))
}
