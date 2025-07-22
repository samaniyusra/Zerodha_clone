require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

mongoose.connect(url)
    .then(() => console.log('Connected to mongodb!'))
    .catch((err) => {
        console.log(err);
    });
app.get("/", (req, res) => {
    res.send("app listening on home page")
})
app.listen(PORT, () => {
    console.log("app listening on port 8080")
});