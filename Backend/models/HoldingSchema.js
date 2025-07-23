const mongoose = require("mongoose");
const { Schema } = mongoose; 

const HoldingSchema = Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String

})


const holding = mongoose.model("holding", HoldingSchema);
module.exports = { holding };