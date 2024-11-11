// 用户路由
import Router from "@koa/router";
import UserController from "../controller/user.controller.js";
import { userValidator, veifyUser, cryptPassword } from '../middleware/user.middleware.js'
const router = new Router({ prefix: "/users" });
//注册接口
router.post('/register', userValidator, veifyUser, cryptPassword, UserController.register)
//登录接口 UserController.login
router.post('/login', UserController.login)
export default router;