const mongoose=require("mongoose");

module.exports=()=>{
    
    try{
        mongoose.set("strictQuery", false);
        mongoose.connect("mongodb+srv://mike:mike@cluster0.dbssiow.mongodb.net/?retryWrites=true&w=majority")
        console.log("database connected!")
    }catch(e){
        console.log("Could not connect to database"+e);
    }
}