const express = require("express");
const router = express.Router();
const Purchase = require("../models/purchase");
const jwt = require("jsonwebtoken");

router.route("/make-purchase").post((req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      console.log("failed");
      res.sendStatus(403);
    } else {
      console.log("authdata", authData);
      const items = req.body.items;
      const total = req.body.total;
      const method = req.body.method;
      const number = req.body.number;
      const date = req.body.date;
      const email = authData.user.email;
      const name = req.body.name;
      const lastName = req.body.lastName;
      const phone = req.body.phone;
      const address = req.body.address;
      const newPurchase = new Purchase({
        items,
        total,
        method,
        number,
        date,
        email,
        name,
        lastName,
        address,
        phone,
      });
      newPurchase.save();
      res.json({ msg: "Purchase created" });
    }
  });
});

module.exports = router;
