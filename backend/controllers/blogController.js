const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

const createBlog = asyncHandler(async (req, res) => {
    const {
      userId,
      title,
      body,
    } = req.body;
  
    const buildBlog = new Blog({
      userId,
      title,
      body,
    });
  
    const blog = await buildBlog.save();
  
    return res.status(200).json({
      blog,
      message: "successfully created blog Demo",
    });
  });


  const getAllBlogs = asyncHandler(async (req, res) => {
    const allBlog = await Blog.find({});
    if (!allBlog) {
    } else {
      return res.status(200).json({
        allBlog,
      });
    }
  });

  const getBlogByUserEmail = asyncHandler(async (req, res) => {
    console.log('rrrrrrrrrrrrrrrrrrr');
    const email = req.query.email;
    const myBlogs = await Blog.find({});

    const blogs = myBlogs.filter((blogs => (blogs.users.filter((user => (user.userEmail === email)))).length && blogs))
    
    if (!blogs) {
      return
    } else {
      return res.status(200).json({
        blogs,
      });
    }
  });
  
  const getSingleBlog = asyncHandler(async (req, res) => {
    const singleBlog = await Blog.findById(req.params.id);
    if (!singleBlog) {
    } else {
      return res.status(200).json({
        singleBlog,
      });
    }
  });

  const deleteBlog = asyncHandler(async (req, res) => {
    const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deleteBlog) {
      res.status(400);
      throw new Error("Something Went Wrong!");
    } else {
      return res.status(200).json({
        deleteBlog,
        message: "deleted successfully",
      });
    }
  });

  module.exports = {
    createBlog,
    getAllBlogs,
    getBlogByUserEmail,
    getSingleBlog,
    deleteBlog,
  };