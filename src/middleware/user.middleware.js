import bcryptjs from 'bcryptjs'
import usersService from '../service/users.service.js'
import { userAlreadyExited, userFormateError } from '../constant/err.type.js'
const userValidator = async (ctx, next) => {
  //合法性校验
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    console.error("用户名或密码为空", ctx.request.body)
    ctx.app.emit("error", userFormateError, ctx)
    return
  }
  await next()
}
const veifyUser = async (ctx, next) => {
  //合理性检查用户是否注册
  const { user_name } = ctx.request.body
  if (await usersService.getUserInfo({ user_name })) {
    ctx.app.emit('error', userAlreadyExited, ctx)
    return
  }
  await next()
}
//bcryptjs加密密码
const cryptPassword = async (ctx, next) => {
  //密码加密
  const { password } = ctx.request.body
  const salt = bcryptjs.genSaltSync(10)
  //hash是加密后的密文
  const hash = bcryptjs.hashSync(password, salt)
  ctx.request.body.password = hash
  await next()
}
export { userValidator, veifyUser, cryptPassword }
