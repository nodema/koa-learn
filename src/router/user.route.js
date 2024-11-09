// 用户路由
import Router from "@koa/router";
import UserController from "../controller/user.controller.js";
const router = new Router({ prefix: "/users" });
//注册接口
router.post('/register', UserController.register)
//登录接口 UserController.login
router.post('/login', UserController.login)
export default router;