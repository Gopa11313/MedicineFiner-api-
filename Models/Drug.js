const mongoose = require("mongoose");
const Drug = mongoose.model("Drug", {
  name: {
    type: String,
    requried: true,
  },
  SellerId: {
    type: String,
    requried: true,
  },
  prescription: {
    type: String,
    requried: true,
  },
  date: {
    type: Date,
  },
});
module.exports = Drug;
