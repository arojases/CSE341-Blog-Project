const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const validation = require('../middleware/validate.js');
const passwordUtil = require('../utils/passwordComplexityCheck');

//REGISTER
router.post("/register", validation.registerUser, async (req, res) => {
  try {

    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    
    // password complexity Ccheck
    const passwordch = req.body.password;
    const passwordCheck = passwordUtil.passwordPass(passwordch);
    if (passwordCheck.error) {
      res.status(400).send({ message: passwordCheck.error });
      return;
    }

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      country: req.body.country,
      city: req.body.city,
      birthday: req.body.birthday,
      address: req.body.address
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
