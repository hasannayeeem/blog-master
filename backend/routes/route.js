const express = require('express');
// verify jwt middleware
// const checkLogin = require('../middlewares/checkLogin.js');

// blogController 
const {
	createBlog,
    getAllBlogs,
    getBlogByUserEmail,
    getSingleBlog,
    deleteBlog
  } = require("../controllers/blogController");

//   commentController
const {
	createComment,
	getAllCommment
  } = require("../controllers/commentController");
const router = express.Router()


// blog routes here
router.post("/createBlog", createBlog);
router.get("/getBlogs", getAllBlogs);
router.get("/getBlogByUserEmail", getBlogByUserEmail);
router.get("/getBlog/:id", getSingleBlog);
router.delete("/deleteBlog/:id", deleteBlog);

// comment routes 
router.post("/createComment", createComment);
router.get("/getComments", getAllCommment);


module.exports = router;