const express = require("express");
const app= express();
const port=5000;
const cors=require('cors'); 


const userRouter = require("./routers/userRouter");
const equipmentRouter = require("./routers/equipmentRouter");

app.use(express.json());

app.use(cors({
    origin : ['http://localhost:3000']

}))

app.use("/admin", userRouter);
app.use("/equipment", equipmentRouter);

app.get('/',(req,res)=>{
    res.send("you got a response")
})

app.listen(port,()=>{
    console.log("my major server is started");
})












