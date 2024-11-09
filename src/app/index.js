import Koa from 'koa'
import { koaBody } from 'koa-body'
import router from '../router/user.route.js'
const app = new Koa()

app.use(koaBody())
app.use(router.routes())
app.use(router.allowedMethods());
export default app