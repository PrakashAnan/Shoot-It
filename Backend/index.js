const express = require("express");
const app= express();
const port=5000;
const cors=require('cors');


const userRouter = require("./routers/userRouter");

app.use(cors({
    origin : ['http://localhost:3000']

}))


const equipmentRouter = require("./routers/equipmentRouter");


app.use("/admin", userRouter);
app.use("/equipment", equipmentRouter);

app.use(express.json());










