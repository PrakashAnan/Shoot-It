const express = require("express");
const app= express();
const port=5000;
const cors=require('cors');


const userRouter = require("./Router/userRouter");


app.use("/user", userRouter);
app.use(express.json());

app.use(cors({
    origin : ['http://localhost:3000']

}))














app.use(express.json());

app.use(cors({
    origin : ['http://localhost:3000']

}))