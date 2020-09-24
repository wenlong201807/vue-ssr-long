const Koa = require('koa')
const Router = require('koa-router')
const Static = require('koa-static')
const app = new Koa()
const router = new Router()
const Vue = require('vue')
const VueServerRender = require('vue-server-renderer')
const vm = new Vue({
  data () {
    return {msg:'hai tian'}
  },
  template:`<div>{{msg}}</div>`
})
// 创建一个渲染器
let render = VueServerRender.createRenderer()
router.get('/', async ctx => {
  ctx.body = await render.renderToString(vm)
})


app.use(router.routes())
app.listen(3001)