const mongoose = require("../connection");
const mySchema = new mongoose.Schema({

user:String,
shippingaddress:String,
shippingstatus:String,
createdAt: { type: Date, default: new Date() },
  
});

const myModel = mongoose.model("OrderPlaced", mySchema);

module.exports = myModel;
