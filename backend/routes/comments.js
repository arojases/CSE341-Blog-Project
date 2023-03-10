const express = require("express");
const router = express.Router();

const { getAllComment, createComment} = require("../controllers/comment")

router.get("/", getAllComment);
router.post("/", createComment);

module.exports = router;