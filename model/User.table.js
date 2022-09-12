// name,phonenumber,password,tea center,email
const mongoose = require("mongoose"); //to import the package

const UserTable = mongoose.Schema(
  {
    name: {
      type: String,
      required: "please input name",
    },
    phone_number: {
      type: Number,
      required: "please input phone number",
      unique: true,
    },
    password: {
      type: String,
      required: "please input password",
    },
    tea_center: {
      type: mongoose.Schema.Types.ObjectId,
      required: "please input tea center",
      ref: "Center", //this is the reference to table tea center
    },
    email: {
      type: String,
      unique: true,
    },
    role: {
      type: String,
      enum: ["admin", "farmer", "agent"],
      default: "farmer",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserTable);
