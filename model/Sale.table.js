// user,date,produce
const mongoose=require("mongoose")

const SalesTable= mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",

    },
    produce_amount:{
        type:String,
    }

} ,{timestamps:true})
module.exports=mongoose.model("Sales",SalesTable)

