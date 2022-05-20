const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
    
    name: String,
    username: String,
    mobileno: Number,
    password: String,
    email:String,
    isAdmin: {type : Boolean, default : false},
    createdAt: { type: Date, default: new Date() },

})
const myModel = mongoose.model("user", mySchema);

module.exports = myModel;
