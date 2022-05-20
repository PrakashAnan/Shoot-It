const mongoose = require("../connection");
const mySchema = new mongoose.Schema({

    firstname: String,
    lastname:String,
    username: String,
    address:String,
    address2:String,
    email:String,
    mobileno: Number,
    password: String,
    createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("OrderList", mySchema);

module.exports = myModel;
