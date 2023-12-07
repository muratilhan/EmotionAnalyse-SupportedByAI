const mongoose = require("mongoose");

const testResultSchema = mongoose.Schema(
  {
    commonEmotion: {
      type: String,
    },
    Igrenmis: {
      type: Number,
    },
    Kizgin: {
      type: Number,
    },
    Korkmus: {
      type: Number,
    },
    Mutlu: {
      type: Number,
    },
    Mutsuz: {
      type: Number,
    },
    Notr: {
      type: Number,
    },
    Sasirmis:{
      type: Number
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TestResult", testResultSchema);
