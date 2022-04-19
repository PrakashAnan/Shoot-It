const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  title: String,
  model: String,
  price: Number,
  image: String,
  brand:String,
  rentable:{ type: Boolean, default: false },
  rentPrice:Number,

  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("equipment", mySchema);

module.exports = myModel;
