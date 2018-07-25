const models = require("../models");

const createCategory = async (ctx, next) => {
  let category = ctx.request.body;
  try {
    if (category.parent) {
      //create child categroy
      const parentCategory = await models.Category.findById(category.parent);
      if (parentCategory && !parentCategory.parent) {
        const categories = await models.Category.find({ name: category.name });
        if (categories.length === 0) {
          const newCategory = new models.Category({
            name: category.name,
            parent: parentCategory._id
          });
          const result = await newCategory.save();
          ctx.body.data.success = 1;
          ctx.body.data.category = result;
        }
      }
    } else {
      //create parent category
      const categories = await models.Category.find(category);
      if (categories.length === 0) {
        const newCategory = new models.Category(category);
        const result = await newCategory.save();
        ctx.body.data.success = 1;
        ctx.body.data.category = result;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteCategory = async (ctx, next) => {
  const { _ids } = ctx.request.body;
  try {
    await Promise.all([
      models.Blog.updateMany({}, { $pull: { category: { $in: _ids } } }).exec(),
      models.Category.deleteMany({ _id: { $in: _ids } }).exec()
    ]);
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

const updateCategory = async (ctx, next) => {
  const { _id, category } = ctx.request.body;
  try {
    await models.Category.updateOne({ _id }, category).exec();
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

const getCategoryList = async (ctx, next) => {
  const { parent } = ctx.request.query;
  let categories = null;
  try {
    const sortOptions = { sort: { create_time: -1 } };
    categories = await models.Category.find({ parent }, null, sortOptions);
    await Promise.all(
      categories.map(async (category, index, array) => {
        let count = await models.Blog.countDocuments({
          category: { $in: category._id }
        });
        array[index] = array[index].toObject();
        array[index].blog_count = count;
      })
    );
    ctx.body.data.categories = categories;
    ctx.body.data.success = 1;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  getCategoryList
};
