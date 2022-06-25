const express = require("express");
const app = express();

const {
  getAllBlogs,
  getBlogs,
  getSingleBlog,
  addBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog_controller");

const { protect } = require("../middlewares/auth_middleware");

app.route("/all").get(getAllBlogs);
app.route("/").get(protect, getBlogs).post(protect, addBlog);
app
  .route("/:id")
  .get(protect, getSingleBlog)
  .patch(protect, updateBlog)
  .delete(protect, deleteBlog);

module.exports = app;
