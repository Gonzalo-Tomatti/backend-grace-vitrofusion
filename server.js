const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//to avoid cors errors when fetching
app.use(cors());
//to parse the request coming from the frontend
app.use(express.json());

mongoose.connect(process.env.CONNECTION);

app.use("/", require("./routes/login.js"));
app.use("/", require("./routes/signup.js"));
app.use("/", require("./routes/get-purchases.js"));
app.use("/", require("./routes/make-purchase.js"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is listening on port 5000....");
});
