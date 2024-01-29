const mongoose = require("mongoose");

const Comment = new mongoose.Schema({
  blogId: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  body: {
    type: String,
  },
});

module.exports = mongoose.model("comment", Comment);