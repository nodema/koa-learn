//数据库处理
class UserService {
  async createUser(user_name, password) {
    // 写入数据库
    return `数据库写入成功：${user_name}`
  }

}
export default new UserService()