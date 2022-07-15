const express = require("express");
const router = express.Router();
const Purchase = require("../models/purchase");
const jwt = require("jsonwebtoken");

router.route("/get-purchases").get((req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const email = authData.user.email;
      Purchase.find({ email: email })
        .sort({ date: 1 })
        .then((foundPurchases) => res.json(foundPurchases));
    }
  });
});

module.exports = router;
