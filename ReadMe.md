一.node初始化
1. npm init -y
二.安装koa
 1. npm i koa
 2.创建main.js最小化编写koa
 3.安装nodemon编写pacage.json配置 "dev": "nodemon ./src/main.js"，以便使用 npm run dev 启动项目
 4.读取配置文件 安装dotenv npm i dotenv 读取根目录中的.env文件,并将配置信息挂载到process.env上