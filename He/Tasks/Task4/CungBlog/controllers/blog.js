const models = require('../models');

const createBlog = async (ctx, next) => {
  const {
    blog
  } = ctx.request.body;
  try {
    let newBlog = new models.Blog(blog);
    const result = await newBlog.save();
    ctx.body.data.success = 1;
    ctx.body.data.blog = result;
  } catch (err) {
    console.log(err);
  }
};

const updateBlog = async (ctx, next) => {
  const {
    blog,
    _id
  } = ctx.request.body;
  try {
    await models.Blog.update({
      _id
    }, blog).exec();
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

const deleteBlog = async (ctx, next) => {
  const {
    _ids
  } = ctx.request.body;
  try {
    await models.Comment.deleteMany({
      blog_id: {
        $in: _ids
      }
    }).exec();
    await models.Blog.deleteMany({
      _id: {
        $in: _ids
      }
    }).exec();
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
};