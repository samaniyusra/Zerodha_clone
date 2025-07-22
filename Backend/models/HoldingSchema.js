const { Schema, default: mongoose } = require("mongoose");

const HoldingSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String

})


const holding = new mongoose.model("holding", HoldingSchema);
module.exports = { holding };