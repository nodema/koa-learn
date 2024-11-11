//数据库处理
import User from "../model/user.model.js"
class UserService {
  async createUser(user_name, password) {
    // 写入数据库
    const res = await User.create({ user_name, password })
    //console.log(res)
    return res.dataValues
  }
  async getUserInfo({ id, user_name, password, is_admin }) {
    const queryParams = {}
    if (id) queryParams.id = id
    if (user_name) queryParams.user_name = user_name
    if (password) queryParams.password = password
    if (is_admin) queryParams.is_admin = is_admin
    // console.log('查询参数' + queryParams.user_name  + "原始参数" + user_name)
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: queryParams
    })
    //console.log("查询结果" + res )
    return res ? res.dataValues : null
  }

}
export default new UserService()