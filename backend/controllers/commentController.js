const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Question = require("../models/commentModel");
const Comment = require("../models/commentModel");

const createComment = asyncHandler(async (req, res) => {
  const { blogId, userName, email, body } = req.body;

  const buildComment = new Question({
    blogId,
    userName,
    email,
    body,
  });

  const comment = await buildComment.save();

  return res.status(200).json({
    comment,
    message: "comment created successfully",
  });
});

const getAllCommment = asyncHandler(async (req, res) => {
  const allComment = await Comment.find({});
  if (!allComment) {
  } else {
    return res.status(200).json({
      allComment,
    });
  }
});

module.exports = {
  createComment,
  getAllCommment,
};
