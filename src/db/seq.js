import { Sequelize } from "sequelize";
import configOBJ from '../config/config.default.js';
const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PORT,
  MYSQL_PASSWORD,
  MYSQL_DATABASE
} = configOBJ;

//实例化对象，传递参数
// 创建Sequelize实例，用于连接和操作数据库
// 参数1: 数据库名称
// 参数2: 数据库用户名
// 参数3: 数据库密码
// 参数4: 配置对象
//   host: 数据库主机地址
//   dialect: 指定使用的数据库类型  // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
//   logging: 是否显示SQL日志
const seq = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: "mysql",
  logging: false,
});
// 验证连接是否成功
seq
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("数据库连接失败", err);
  });
export default seq