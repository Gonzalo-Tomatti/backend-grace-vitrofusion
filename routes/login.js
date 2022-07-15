const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.route("/login/:email&:password").get((req, res) => {
  const email = req.params.email;
  const password = req.params.password;
  User.find({ email: email, password: password }).then((foundUser) => {
    res.json(foundUser);
  });
});

module.exports = router;
