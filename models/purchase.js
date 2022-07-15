const { Schema, model } = require("mongoose");

const purchaseSchema = new Schema(
  {
    items: Array,
    total: Number,
    method: String,
    number: Number,
    date: Date,
    email: String,
    phone: Number,
    address: String,
    name: String,
    lastName: String,
  },

  { collection: "purchases" }
);

const Purchases = model("Purchases", purchaseSchema);

module.exports = Purchases;
