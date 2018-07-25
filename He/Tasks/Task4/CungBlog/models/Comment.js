const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const commentSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String,
  comment_to: {
    type: ObjectId,
    ref: "Comment"
  },
  blog_id: {
    type: ObjectId,
    ref: "Blog"
  },
  children: [
    {
      type: ObjectId,
      ref: "Comment"
    }
  ],
  create_time: {
    type: Date,
    default: Date.now()
  }
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
