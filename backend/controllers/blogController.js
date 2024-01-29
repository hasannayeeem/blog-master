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
    const myQuizzes = await Quiz.find({});
    let perticipatedQuizzes = [];

    const quizzes = myQuizzes.filter((quizzes => (quizzes.users.filter((user => (user.userEmail === email)))).length && quizzes))
    // for(let i=0;i<myQuizzes.length;i++){
    //   const quiz = myQuizzes[i];
    //   console.log('EEEEEEEEEEEEE: '+quiz)
    //   for(let j=0;j<quiz.users.length;j++){
    //     const quser = quiz.users[j];
    //     if(quser.userEmail===email){
    //       console.log('matched:::::::    '+email);

    //       perticipatedQuizzes.push(quiz);
    //       console.log(perticipatedQuizzes);
    //     }
    //   }
    // }
    // console.log(perticipatedQuizzes);
    // if (!perticipatedQuizzes) {
    //   return
    // } else {
    //   return res.status(200).json({
    //     perticipatedQuizzes,
    //   });
    // }

    if (!quizzes) {
      return
    } else {
      return res.status(200).json({
        quizzes,
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
    const deleteBlog = await Quiz.findByIdAndDelete(req.params.id);
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