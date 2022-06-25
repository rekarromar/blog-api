const asyncHandler = require("express-async-handler");

const Tag = require("../models/tags");

const getTags = async (req, res) => {
  const tags = await Tag.find();
  res.status(200).json(tags);
};

const getTag = asyncHandler(async (req, res) => {
  const tag = await Tag.findOne(req.param.id);
  if (!tag) {
    res.status(401);
    throw new Error("No tag");
  }
  res.status.json(tag);
});

const addTag = asyncHandler(async (req, res) => {
  if (!req.body.tag) {
    res.status(400);
    throw new Error("the required field not given");
  }

  const newTag = await Tag.create({
    tag: req.body.tag,
  });
});

const removeTag = asyncHandler(async (req, res) => {
  const tag = await Tag.findOne(req.params.id);
  if (!tag) {
    res.status(401);
    throw new Error("no tag found");
  }
  tag.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getTags, getTag, addTag, removeTag };
