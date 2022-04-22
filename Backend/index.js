const express = require("express");
const app= express();
const port=5000;
const cors=require('cors'); 


const userRouter = require("./routers/userRouter");
const equipmentRouter = require("./routers/equipmentRouter");

app.use(cors({
    origin : ['http://localhost:3000']

}))
app.use(express.json());
<<<<<<< HEAD
=======

app.use("/admin", userRouter);
>>>>>>> 24930ccf99d3689f84292d5a09411d507b9c29b5
app.use("/user", userRouter);
app.use("/equipment", equipmentRouter);

app.listen(port,()=>{
    console.log("my major server is started");
})






















