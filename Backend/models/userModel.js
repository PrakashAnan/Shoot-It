const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
    
    name: String,
    username: String,
    mobileno: Number,
    password: String,
    email:String,
    createdAt: { type: Date, default: new Date() },

})
const myModel = mongoose.model("Admin", mySchema);

module.exports = myModel;
