const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/UserRoute");
const feedbackRoute = require("./routes/FeedbackRoute");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/feedback", feedbackRoute);

// connect to mongo db
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    app.listen(7000, () => {
      console.log("connected to mongoDB");
    });
  })
  .catch((err) => {
    console.log(err);
  });
