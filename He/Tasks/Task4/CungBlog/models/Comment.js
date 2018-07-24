const mongoose = require('mongoose');
const {
  ObjectId
} = mongoose.Schema.Types;


const commentSchema = new mongoose.Schema({
  blog_id: {
    type: ObjectId,
    ref:'Blog'
  },
  author: String,
  comment_to: {
    type:ObjectId,
    ref:'Comment',
    default:null
  },
  content: String,
  create_time: {
    type: Date,
    default: Date.now()
  },

});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;