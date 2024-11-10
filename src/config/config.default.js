//使用 daotenv 模块读取 .env 文件把环境变量赋值到 process.env 中，并导出
import 'dotenv/config'
console.log(process.env.APP_PORT)
export default process.env