import Koa from 'koa'
const app = new Koa()
app.use((ctx, next) => {
  ctx.body = 'hello koa'
})
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})