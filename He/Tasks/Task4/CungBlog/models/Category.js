const mongoose = require('mongoose');
const {
  ObjectId
} = mongoose.Schema.Types;

const categorySchema = new mongoose.Schema({
  name: String,
  parent: {
    type: ObjectId,
    ref: 'Category',
    default: null
  },
  hidden: {
    type: Boolean,
    default: false
  },
  create_time: {
    type: Date,
    default: Date.now()
  },
  read_count: {
    type: Number,
    default: 0
  },

});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;