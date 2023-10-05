const express=require("express")
const app=express()

const cors=require("cors")
const connect=require("./mongo");
connect()
const LocnRoute=require("./route")

app.use(cors())
app.use(express.json())

app.use("/api",LocnRoute)

const port=5000

app.listen(port,()=>{
    console.log("Server is listening to :",port);
})