const express = require("express");
const router = express.Router();
const User = require("../models/users");
const jwt = require("jsonwebtoken");

router.route("/signup").post((req, res) => {
  const password = req.body.password;
  const email = req.body.email;
  User.find({ email: email }).then((foundEmail) => {
    if (!foundEmail.length) {
      const user = new User({ password, email });
      user.save();
      jwt.sign({ user }, "secretkey", (err, token) => {
        res.json({
          token,
        });
      });
    } else {
      res.json({ msg: "email in use" });
    }
  });
});

module.exports = router;
