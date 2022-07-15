const express = require("express");
const router = express.Router();
const Purchase = require("../models/purchase");

router.route("/get-purchases/:email").get((req, res) => {
  const email = req.params.email;
  console.log(email);
  Purchase.find({ email: email })
    .sort({ date: 1 })
    .then((foundPurchases) => res.json(foundPurchases));
});

module.exports = router;
