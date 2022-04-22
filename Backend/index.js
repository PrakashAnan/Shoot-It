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
<<<<<<< HEAD
app.use("/admin", userRouter);
=======

>>>>>>> 94d79eeb6bbb8c8ea52d64f468798a6164271986
app.use("/user", userRouter);
>>>>>>> 9209e127a11139543dfeb3f4027a9ac4897404e3
app.use("/equipment", equipmentRouter);

app.listen(port,()=>{
    console.log("my major server is started");
})






















