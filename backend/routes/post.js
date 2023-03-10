const express = require("express");
const router = express.Router();
const { getAllPost, createPost } = require("../controllers/post"); 

//TODO https://localhost/post CRUD

router.get("/", getAllPost);
router.post("/", createPost)

module.exports = router;