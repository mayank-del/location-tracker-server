const mongoose=require("mongoose")

const RealSchema=new mongoose.Schema({
    address_line1: {
        type: String,
           
    },
    address_line2: {
        type: String,
           
    },
    city:{
        type:String
    },
    country:{
        type:String
    }
})
Locn2= mongoose.model("Locnnew", RealSchema);
module.exports={Locn2};
