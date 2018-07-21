const router = require('koa-router')();
const controller = require('../controllers');


router.prefix('/api/v1');
//set the json model
router.use(async (ctx, next) => {
  ctx.body = {
    data: {}
  };
  await next();
  ctx.body.status = ctx.response.status;
});

router.post('/user/login', controller.user.login);

router.post('/blog',controller.blog.createBlog);
router.put('/blog',controller.blog.updateBlog);
router.del('/blog',controller.blog.deleteBlog);




module.exports = router;