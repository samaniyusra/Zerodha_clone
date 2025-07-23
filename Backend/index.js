require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const { holding } = require("./models/HoldingSchema");
const { order } = require("./models/orderSchema");
const { position } = require("./models/postionSchema");
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(cors());
app.use(bodyParser.json());
mongoose.connect(url)
    .then(() => console.log('Connected to mongodb!'))
    .catch((err) => {
        console.log(err);
    });
app.get("/allHoldings", async (req, res) => {
    let allHoldings = await holding.find({});
    res.json(allHoldings);

});

app.post("/newOrder", async (req, res) => {
    console.log(req.body);
    let newOrder = new order({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });

    await newOrder.save();

    res.send("Done!");
})

app.get("/allOrders", async(req,res) => {
    let allOrders = await order.find({});
    res.json(allOrders);
})

app.get("/allPositions", async (req, res) => {
    let allPositions = await position.find({});
    res.json(allPositions);

})



app.get("/", (req, res) => {
    res.send("app listening on home page")
})
app.listen(PORT, () => {
    console.log("app listening on port 8080")
})