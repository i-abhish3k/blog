const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")

// Register a user
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(5000);
  }
});

// login a user
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username }); //check is user register or not
    !user && res.status(400).json("Wrong Credentials!");

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Wrong Credentials!");

    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
