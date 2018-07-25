const mongoose = require('mongoose');
<<<<<<< HEAD
mongoose.Promise = require('bluebird');

=======
>>>>>>> e66bc96c4482cd6055804340272b8757cf2406c0
mongoose.connect('mongodb://localhost:27017/CungBlog',{
  authSource:'admin',
  useNewUrlParser:true,
  auth:{
    user:'root',
    password:'Hejianchong'
  }
});
<<<<<<< HEAD


const Blog = require('./Blog');
const Comment = require('./Comment');
const Category = require('./Category');
const Tag = require('./Tag');

module.exports = {
  Blog,
  Comment,
  Category,
  Tag
};
=======
//TODO:test
const Cat = mongoose.model('Cat', { name: String });

module.exports = {Cat};

>>>>>>> e66bc96c4482cd6055804340272b8757cf2406c0
