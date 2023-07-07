const mongoose = require("mongoose")
require('dotenv').config()
//const MONGO_URI = process.env.MONGO_URI
const {MONGO_URI} = process.env 

module.exports.getDbConnection = function(){ 
    mongoose.connect("mongodb://127.0.0.1:27017/mean23").then(()=>console.log("DbConnected")).
    catch((err)=>console.log(err))
}