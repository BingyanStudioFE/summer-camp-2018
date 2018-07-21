const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CungBlog',{
  authSource:'admin',
  useNewUrlParser:true,
  auth:{
    user:'root',
    password:'Hejianchong'
  }
});
//TODO:test
const Cat = mongoose.model('Cat', { name: String });

module.exports = {Cat};

