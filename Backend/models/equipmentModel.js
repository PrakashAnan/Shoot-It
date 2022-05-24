const mongoose = require("../connection");
const mySchema = new mongoose.Schema({
  type:String,
  review:String,
  rating:Number,
  model: String,
  price: Number,
  image: String,
  brand: String,
  comboOffer:String,
  specification:String,
  thumbnail:String, 
  availableOffer:Number,
  delivery:String,
  sensorfeature:String,
  lensfeature:String,
  warranty:String,
  highlights:String,
  rentable:{ type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
  
  
});

const myModel = mongoose.model("equipment", mySchema);

module.exports = myModel;
