const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/CungBlog',{
  authSource:'admin',
  useNewUrlParser:true,
  auth:{
    user:'root',
    password:'Hejianchong'
  }
});


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
