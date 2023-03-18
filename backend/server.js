const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;

dotenv.config();
app.use(express.json());

app.use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }).use('/', require('./routes'));

  mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_API_KEY, () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log("Backend is running.");
});