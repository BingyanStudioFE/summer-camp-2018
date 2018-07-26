const mongoose = require("mongoose");
const { authConfig } = require("./config");
mongoose.Promise = require("bluebird");

mongoose.connect(
  "mongodb://localhost:27017/CungBlog",
  {
    authSource: "admin",
    useNewUrlParser: true,
    auth: authConfig
  }
);

const Blog = require("./Blog");
const Comment = require("./Comment");
const Category = require("./Category");
const Tag = require("./Tag");

module.exports = {
  Blog,
  Comment,
  Category,
  Tag
};
