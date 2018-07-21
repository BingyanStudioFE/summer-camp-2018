const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const koaJwt = require('koa-jwt');
const {
  jwtConfig
} = require('./config');

const index = require('./routes/index');
const api = require('./routes/api');


// error handler
onerror(app);

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'pug'
}));


//judge whether author is need or not 
app.use(koaJwt({
  secret: jwtConfig.secret
}).unless(ctx => {
  if (ctx.request.url.match(/\/api/) && !ctx.request.url.match(/\/login/) && !ctx.request.url.match(/\/public/)) {
    return false;
  }
  return true;
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(api.routes(), api.allowedMethods());
app.use(index.routes(), index.allowedMethods());


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
