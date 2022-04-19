const mongoose = require("../connection");

const mySchema = new mongoose.Schema({
  title: String,
  Model: Number,
  Price: Number,
  Image: String,
  createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("", mySchema);

module.exports = myModel;