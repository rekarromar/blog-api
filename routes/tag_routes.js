const express = require("express");
const app = express();

const {
  getTags,
  addTag,
  getTag,
  removeTag,
} = require("../controllers/tag_controller");

app.route("/").get(getTags).post(addTag);
app.route("/:id").get(getTag).delete(removeTag);

module.exports = app;
