const express = require("express");
const router = express.Router();

const { getItem, createItem} = require("../controllers/comments")

router.get("/", getItem);
router.post("/", createItem);

module.exports = router;