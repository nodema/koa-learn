import { DataTypes } from 'sequelize'
import seq from '../db/seq.js'
const User = seq.define('koa_user', {
  //ID会自动创建
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '用户名，唯一'
  },
  password: {
    type: DataTypes.CHAR(64),
    allowNull: false,
    comment: '密码'
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
    comment: "是否是管理员,默认0否，1是"

  }
})
// 强制同步(创建数据表)
//User.sync({ force: true })
export default User