const express = require('express');
require('dotenv').config();
const router = express.Router();

router.use('/', require('./swagger'));
router.use("/auth", require('../controller/auth'));
router.use("/users", require('../controller/users'));
router.use("/posts", require('../controller/posts'));
router.use("/categories", require('../controller/categories'));


module.exports = router;
