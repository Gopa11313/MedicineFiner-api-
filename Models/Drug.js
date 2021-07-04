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
});
module.exports = Drug;
