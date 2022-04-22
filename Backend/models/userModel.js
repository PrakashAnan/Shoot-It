const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
    
    name: String,
    username: String,
    mobileno: Number,
    password: String,
    email:String,
    createdAt: { type: Date, default: new Date() },

})
<<<<<<< HEAD
const myModel = mongoose.model("user", mySchema);
=======
const myModel = mongoose.model("users", mySchema);
>>>>>>> 24930ccf99d3689f84292d5a09411d507b9c29b5

module.exports = myModel;
