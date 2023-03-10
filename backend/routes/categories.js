const express = require("express");
const router = express.Router();
const { getItem, createItem } = require("../controllers/categories"); 

//TODO https://localhost/post CRUD

router.get("/", getItem);
router.post("/", createItem);


module.exports = router;