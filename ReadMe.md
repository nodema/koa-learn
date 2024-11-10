### 使用的库
1.koa - Koa 的核心库，用于创建 Koa 应用程序。
2.koa-router - 用于处理路由的中间件。
3.koa-body - 用于解析请求体的中间件。
4.dotenv - 加载环境变量的库
5.npm i sequelize - 用于与MySQL数据库进行交互的库
6.mysql2 - 用于与MySQL数据库进行交互的库
### 目录结构说明
目录结构说明
node_modules/: 该目录包含项目所需的所有依赖模块。
src/: 存放源代码的主要目录。
  main.js: 应用程序的主入口文件，通常用于启动Koa服务器。
  app index.js: 应用的主入口文件，通常用于启动Koa服务器。
  routes/: 存放路由定义的文件夹，处理不同的HTTP请求。
  controllers/: 存放控制器文件的文件夹，用于处理业务逻辑和返回响应。
  services/: 存放服务文件的文件夹，用于操作数据库。

.env: 存放环境变量的配置文件，通常用于管理敏感信息和配置。
.gitignore: 指定Git在版本控制时要忽略的文件和目录。
package.json: 包含项目的基本信息、依赖项和可执行的脚本。
README.md: 项目的说明文档，通常包含安装和使用指南。
#### 一.node初始化
1. npm init -y
#### 二.安装koa，配置库文件
 1. npm i koa
 2.创建main.js最小化编写koa
 3.安装nodemon编写pacage.json配置 "dev": "nodemon ./src/main.js"，以便使用 npm run dev 启动项目
 4.读取配置文件 安装dotenv npm i dotenv 读取根目录中的.env文件,并将配置信息挂载到process.env上
 #### 三.koa中间件