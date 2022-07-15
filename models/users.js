const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    password: String,
    email: String,
  },

  { collection: "users" }
);

const User = model("Users", userSchema);

module.exports = User;
