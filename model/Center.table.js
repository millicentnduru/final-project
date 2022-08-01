// name
const mongoose=require("mongoose")

const CenterTable=mongoose.Schema({
    name:{
        type:String,
        unique:true,    
    }

},{timestamps:true})
module.exports=mongoose.model("Center",CenterTable)