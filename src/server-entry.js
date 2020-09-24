const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const static = require('koa-static')
const Vue = require('vue')
const fs = require('fs')
const path = require('path')
const VueServerRender = require('vue-server-renderer')

let ServerBundle = fs.readFileSync('./dist/server.bundle.js','utf8')
// 渲染打包后的结果
let template = fs.readFileSync('./dist/index.ssr.html','utf8')

let render = VueServerRender.createBundleRenderer(ServerBundle, {
  template
})
router.get('/', async ctx => {
  // 通过渲染函数，渲染我们的vue实例
  // ctx.body = await render.renderToString()
  // 方法 必须要写成回调函数的形式，否则样式不生效
  ctx.body = await new Promise((resolve, reject) => {
    render.renderToString({url:'/'},(err, data) => {
      if(err) reject(err)
      resolve(data)
    })
  })
})


app.use(router.routes())
// koa 静态服务中间件
app.use(static(path.resolve(__dirname,'dist')))
app.listen(3001)