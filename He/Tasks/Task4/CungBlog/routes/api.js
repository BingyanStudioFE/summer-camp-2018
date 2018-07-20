const router = require('koa-router')()
const controller = require('../controllers')

router.prefix('/api/v1')

router.post('/user/login', controller.user.login)


module.exports = router