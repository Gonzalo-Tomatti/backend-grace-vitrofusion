const express = require("express");
const router = express.Router();
const User = require("../models/users");

router.route("/signup").post((req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  User.find({ email: email }).then((foundEmail) => {
    if (!foundEmail.length) {
      const newUser = new User({ password, email });
      newUser.save();
      res.json({ msg: "User created" });
    } else {
      res.json({ msg: "email in use" });
    }
  });
});

module.exports = router;
