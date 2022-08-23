
const mongoose = require("mongoose");
// creating the blue print for the tasks
const imgSchema = new mongoose.Schema({
  // validation
  message: { type: String },
  
  productImage: { type: String },
});
const Doc = mongoose.model("Doc", imgSchema);
module.exports = Doc;