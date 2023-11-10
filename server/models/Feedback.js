const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    comment: {
      type: String,
    },
    rating: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
