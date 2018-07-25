const models = require('../models');

const createComment = async (ctx, next) => {
  const {
    comment
  } = ctx.request.body;
  const newComment = new models.Comment(comment);
  try {
    await models.Blog.findById(comment.blog_id);
    const result = await newComment.save();
    if (comment.comment_to) {
      await models.Comment.update({
        _id: comment.comment_to
      }, {
        $push: {
          children: result._id
        }
      });
    }
    ctx.body.data.comment = result;
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }

};

const deleteComment = async (ctx, next) => {
  const {
    _ids
  } = ctx.request.body;
  try {
    await models.Comment.deleteMany({
      _id: {
        $in: _ids
      }
    });
    await models.Comment.updateMany({}, {
      $pull: {
        children: {
          $in: _ids
        }
      }
    });
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};


const getCommentList = async (ctx, next) => {
  const {
    skip,
    limit
  } = ctx.request.query;
  try {
    const comments = await models.Comment.find(null, null, {
      sort: {
        create_time: -1
      },
      skip: parseInt(skip),
      limit: parseInt(limit)
    });
    const comment_count = await models.Comment.countDocuments();
    ctx.body.data.comment_count = comment_count;
    ctx.body.data.success = 1;
    ctx.body.data.comments = comments;
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  createComment,
  deleteComment,
  getCommentList
};