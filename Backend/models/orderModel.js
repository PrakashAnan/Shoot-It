const mongoose = require("../connection");
const mySchema = new mongoose.Schema({

    user : {type : mongoose.Types.ObjectId, ref :"user"},
    address : String,
    equipment : {type : mongoose.Types.ObjectId, ref:"equipment"},
    rent: Boolean,
    createdAt: { type: Date, default: new Date() },
});

const myModel = mongoose.model("OrderList", mySchema);

module.exports = myModel;
