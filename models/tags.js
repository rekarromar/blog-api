const mongoose = require("mongoose");

const tagSchema = mongoose.Schema({
  tag: String,
});

module.exports = mongoose.model("Tag", tagSchema);
