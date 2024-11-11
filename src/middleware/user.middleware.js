import bcryptjs from 'bcryptjs'
import usersService from '../service/users.service.js'
import { userAlreadyExited, userFormateError, userNotExited, userLoginError, userPasswordError } from '../constant/err.type.js'
const userValidator = async (ctx, next) => {
  //合法性校验
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    console.error("用户名或密码为空", ctx.request.body)
    ctx.app.emit("error", userFormateError, ctx)
    return
  }
  console.log(user_name, password)
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
const veifyLogin = async (ctx, next) => {
  //1.用户是否存在（不存在报错）
  const { user_name, password } = ctx.request.body
  try {
    const res = await usersService.getUserInfo({ user_name })
    if (!res) {
      console.error('用户不存在', user_name)
      ctx.app.emit("error", userNotExited, ctx)
      return
    }
    //2.密码是否正确（不正确报错）
    //bcryptjs.compareSync(password, res.password) 验证密码
    if (!bcryptjs.compareSync(password, res.password)) {
      console.error('密码错误', password)
      ctx.app.emit("error", userPasswordError, ctx)
      return
    }
  } catch (err) {
    console.error('用户不存在', user_name)
    ctx.app.emit("error", userLoginError, ctx)
    return
  }
  //3.执行登陆中间件
  await next()

}

export { userValidator, veifyUser, cryptPassword, veifyLogin }
