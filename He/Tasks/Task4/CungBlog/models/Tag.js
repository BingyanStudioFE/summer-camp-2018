const mongoose = require('mongoose');
const {
  ObjectId
} = mongoose.Schema.Types;

const tagSchema = new mongoose.Schema({
  name: String,
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

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;