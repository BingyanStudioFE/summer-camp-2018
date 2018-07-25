const router = require("koa-router")();
const controller = require("../controllers");

router.prefix("/api/v1");
//set the json model
router.use(async (ctx, next) => {
  ctx.body = { data: { success: 0 } };
  await next();
  ctx.body.status = ctx.response.status;
});

router.post("/user/login", controller.user.login);

router.post("/blog", controller.blog.createBlog);
router.put("/blog", controller.blog.updateBlog);
router.del("/blog", controller.blog.deleteBlog);
router.get("/public/blog/:id", controller.blog.getBlogDetail);
router.get("/public/blogs", controller.blog.getBlogList);

router.post("/category", controller.category.createCategory);
router.put("/category", controller.category.updateCategory);
router.del("/category", controller.category.deleteCategory);
router.get("/public/category", controller.category.getCategoryList);

router.post("/tag", controller.tag.createTag);
router.put("/tag", controller.tag.updateTag);
router.del("/tag", controller.tag.deleteTag);
router.get("/public/tags", controller.tag.getTagList);

router.post("/public/comment", controller.comment.createComment);
router.del("/comment", controller.comment.deleteComment);
router.get("/public/comment", controller.comment.getCommentList);

module.exports = router;
