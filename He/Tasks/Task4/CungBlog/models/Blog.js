const mongoose = require('mongoose');
const {
  ObjectId
} = mongoose.Schema.Types;

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [{
    type: ObjectId,
    ref: 'Tag'
  }],
  category: [{
    type: ObjectId,
    ref: 'Category',
    default:null
  }],
  read_count: {
    type: Number,
    default: 0
  },
  hidden: {
    type: Boolean,
    default: false
  },
  update_time: {
    type: Date,
    default: Date.now()
  }
});

blogSchema.pre('update', function (next) {
  this.set({update_time:Date.now()});
  next();
});
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;