const Models = require('../models');

const createBlog = async (ctx, next) => {
  //TODO:test mongoConnection
  const kitty = new Models.Cat({
    name: 'Zildjian'
  });
  kitty.save().then(() => console.log('meow'));
};

const updateBlog = async (ctx, next) => {

};

const deleteBlog = async (ctx, next) => {

};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
};