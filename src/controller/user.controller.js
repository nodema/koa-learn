// 用户控制器
import usersService from "../service/users.service.js"
class UserController {
  async register(ctx, next) {
    //1.获取请求参数
    const { user_name, password } = ctx.request.body
    //2.操作数据库
    const res = await usersService.createUser(user_name, password)
    console.log(res)
    //3.返回响应
    ctx.body = `'注册成功'${user_name}`


  }
  async login(ctx, next) {
    ctx.body = '登录成功'
  }
}
export default new UserController()