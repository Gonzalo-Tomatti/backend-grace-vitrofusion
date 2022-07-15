const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.route("/login/:username&:password").get((req, res) => {
  const username = req.params.username;
  const password = req.params.password;
  User.find({ username: username, password: password }).then((foundUser) => {
    res.json(foundUser);
  });
});

module.exports = router;
