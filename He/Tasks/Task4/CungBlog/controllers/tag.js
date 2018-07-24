const models = require('../models');

const createTag = async (ctx, next) => {
  let {
    tags
  } = ctx.request.body;
  try {
    let oldTags = await models.Tag.find({
      name: {
        $in: tags
      }
    });
    oldTags = oldTags.map(v => v.name);
    let newTags = tags.filter(v => !oldTags.includes(v));
    newTags = newTags.map(v => ({
      name: v
    }));
    console.log(oldTags);
    const result = await models.Tag.insertMany(newTags);
    ctx.body.data.success = 1;
    ctx.body.data.has_existed = oldTags;
    ctx.body.data.new_tags = result;
  } catch (err) {
    console.log(err);
  }

};

const updateTag = async (ctx, next) => {
  const {
    tag,
    _id
  } = ctx.request.body;
  try {
    await models.Tag.updateOne({
      _id
    }, tag).exec();
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};


const deleteTag = async (ctx, next) => {
  const {
    _ids
  } = ctx.request.body;
  try {
    await Promise.all([
      models.Blog.updateMany({}, {
        $pull: {
          tags: {
            $in: _ids
          }
        }
      }).exec(),
      models.Tag.deleteMany({
        _id: {
          $in: _ids
        }
      }).exec()
    ]);
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

const getTagList = async (ctx, next) => {
  try {
    const list = await models.Tag.find(null, null, {
      sort: {
        create_time: -1
      }
    });
    ctx.body.data.success = 1;
    ctx.body.data.tags = list;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createTag,
  updateTag,
  deleteTag,
  getTagList,
};