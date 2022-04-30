const mongoose = require("../connection");
const mySchema = new mongoose.Schema({
  type:String,
  title: String,
  model: String,
  price: Number,
  image: String,
  brand:String,
  thumbnail:String, 
  rentable:{ type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
  
});

const myModel = mongoose.model("equipment", mySchema);

module.exports = myModel;
