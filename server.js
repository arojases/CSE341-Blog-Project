require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require("./connection/db");

const app = express();

const port = process.env.PORT || 8080;

/*Routes*/
app.use("/", require("./routes"));

app.use(express.json());

app.listen(port, () => {
    console.log("Using https://localhost:" + port)
})

dbConnect()