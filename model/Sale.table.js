// user,date,produce
const mongoose = require("mongoose");

const SalesTable = mongoose.Schema(
  {
    comment: {
      type: String,
    },
    weight: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: "please select user",
      ref: "User", //this is the reference to table tea center
    },
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      // required: "please select",
      ref: "User",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Sales", SalesTable);
