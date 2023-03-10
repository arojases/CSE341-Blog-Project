const express = require("express");
const router = express.Router();
const { getAllCategory, createCategory } = require("../controllers/category"); 

//TODO https://localhost/post CRUD

router.get("/", getAllCategory);
router.post("/", createCategory);


module.exports = router;