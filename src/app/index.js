import Koa from 'koa'
import { koaBody } from 'koa-body'
import router from '../router/user.route.js'
import { errHanler } from '../app/errHandler.js'
const app = new Koa()

app.use(koaBody())
app.use(router.routes())
app.use(router.allowedMethods());
app.on('error', errHanler);
export default app