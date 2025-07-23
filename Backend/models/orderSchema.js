const mongoose = require("mongoose");
const { Schema } = mongoose;

let orderSchema = Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

const order = mongoose.model("order", orderSchema);

module.exports = { order };