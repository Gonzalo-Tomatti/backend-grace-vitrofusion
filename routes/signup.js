const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.route("/signup").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const newUser = new User({ username, password, email });
  newUser.save();
  res.json({ msg: "User created" });
});

module.exports = router;
