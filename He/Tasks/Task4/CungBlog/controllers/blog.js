const models = require("../models");

const createBlog = async (ctx, next) => {
  const { blog } = ctx.request.body;
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
  const { blog, _id } = ctx.request.body;
  try {
    await models.Blog.update({ _id }, blog).exec();
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

const deleteBlog = async (ctx, next) => {
  const { _ids } = ctx.request.body;
  try {
    await models.Comment.deleteMany({ blog_id: { $in: _ids } }).exec();
    await models.Blog.deleteMany({ _id: { $in: _ids } }).exec();
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

const getBlogDetail = async (ctx, next) => {
  const { id } = ctx.params;
  try {
    const result = await models.Blog.findById(id);
    if (!ctx.headers.authorization) {
      const tagsId = result.tags.map(v => v._id);
      const categoryId = result.category.map(v => v._id);
      await models.Tag.updateMany(
        { _id: { $in: tagsId } },
        { $inc: { read_count: 1 } }
      );
      await models.Category.updateMany(
        { _id: { $in: categoryId } },
        { $inc: { read_count: 1 } }
      );
      result.read_count++;
      await result.save();
    }
    await result
      .populate("category tags", "name read_count _id create_time parent")
      .execPopulate();
    const comments = await models.Comment.find({
      blog_id: id,
      comment_to: { $eq: null }
    }).populate("children");
    const comment_count = await models.Comment.countDocuments({ blog_id: id });
    ctx.body.data.comment_count = comment_count;
    ctx.body.data.blog = result;
    ctx.body.data.comments = comments;
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

const getBlogList = async (ctx, next) => {
  try {
    let query = queryProcess(ctx.request.query);
    let result = await models.Blog.find(
      query.conditions,
      null,
      query.options
    ).populate("tags category", "_id name");
    ctx.body.data.blog_count = await models.Blog.countDocuments(
      query.conditions
    );
    ctx.body.data.blogs = result;
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

const queryProcess = raw => {
  raw = raw || {};
  let query = {
    conditions: {},
    options: { sort: { create_time: -1 } }
  };
  if (raw.category) {
    query.conditions.category = { $in: raw.category };
  }
  if (Object.keys(raw).some(v => v.match(/tag/))) {
    let tags = [];
    Object.keys(raw)
      .filter(v => v.match(/tag/))
      .forEach(tag => tags.push(raw[tag]));
    query.conditions.tags = { $all: tags };
  }
  if (raw.keyword) {
    raw.keyword = raw.keyword.replace(
      /([\^\$\(\)\*\+\?\.\\\|\[\]\{\}])/g,
      "\\$1"
    );
    const keyword = new RegExp(raw.keyword, "mg");
    query.conditions.$or = [{ content: keyword }, { title: keyword }];
  }
  if (raw.skip) {
    query.options.skip = parseInt(raw.skip);
  }
  if (raw.limit) {
    query.options.limit = parseInt(raw.limit);
  }
  if (raw.order) {
    let order = [
      {
        update_time: -1
      },
      {
        update_time: 1
      },
      {
        read_count: -1
      },
      {
        read_count: 1
      }
    ][raw.order];
    query.options.sort = order;
  }
  if (raw.start_time) {
    query.conditions.update_time = query.conditions.update_time || {};
    query.conditions.update_time.$gte = Date(raw.start_time);
  }
  if (raw.end_time) {
    query.conditions.update_time = query.conditions.update_time || {};
    query.conditions.update_time.$lte = Date(raw.end_time);
  }
  return query;
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogDetail,
  getBlogList
};
