import express from "express";

import userController from "../controllers/userController";

const authRouter = express.Router();

// 로그인
authRouter.post("/", userController.handleLogin);
// 로그아웃 GET or POST?
authRouter.get("/", userController.handleLogout);
// 회원가입
authRouter.post("/new", userController.handleRegister);

export default authRouter;
