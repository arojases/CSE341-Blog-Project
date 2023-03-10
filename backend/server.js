require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require("./connection/db");

const app = express();

const port = process.env.PORT || 8080;

/*Routes*/
app.use(express.json());
app.use("/", require("./routes"));



app.listen(port, () => {
    console.log("Using https://localhost:" + port)
})

dbConnect()