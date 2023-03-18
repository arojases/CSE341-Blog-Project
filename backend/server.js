const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

const port = process.env.PORT || 8080;

dotenv.config();
app.use(express.json());


app.use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }).use('/', require('./routes'));

mongoose
  .connect(process.env.MONGO_API_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log("Backend is running.");
});
