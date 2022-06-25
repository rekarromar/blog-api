const asyncHandler = require("express-async-handler");

const Blog = require("../models/blog");

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json(blogs);
};

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({ user: req.user._id });
  res.status(200).json(blogs);
};

const getSingleBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(401);
    throw new Error("Blog not found");
  }

  if (blog.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  res.status(200).json(blog);
});

const addBlog = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.body || !req.body.category) {
    res.status(400);
    throw new Error("given fields not filled with proper value");
  }
  const newBlog = await Blog.create({
    user: req.user.id,
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
  });

  res.json(newBlog);
});

const updateBlog = async (req, res) => {
  const updatedBlog = await Blog.updateOne({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category,
  });
  res.status(200).json(updatedBlog);
};

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(401);
    throw new Error("Blog not found");
  }

  if (blog.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await blog.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllBlogs,
  getBlogs,
  getSingleBlog,
  addBlog,
  updateBlog,
  deleteBlog,
};
