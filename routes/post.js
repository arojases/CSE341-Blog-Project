const express = require("express");
const router = express.Router();
const { getItem } = require("../controllers/post"); 

//TODO https://localhost/post CRUD

router.get("/", getItem);

module.exports = router;