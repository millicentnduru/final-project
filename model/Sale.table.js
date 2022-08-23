// user,date,produce
const mongoose = require("mongoose");

const SalesTable = mongoose.Schema(
  {
    month: {
      type: String,
      ref: "month",
    },
    produce_amount: {
      type: String,
    },

    tea_center: {
      type: mongoose.Schema.Types.ObjectId,
      required: "please input tea center",
      ref: "Center", //this is the reference to table tea center
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Sales", SalesTable);
