const mongoose = require("mongoose");

const Blog = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
    },
    body: {
      type: String,
      require: true,
    }
  }
);

module.exports = mongoose.model("blog", Blog);
