// app configurations
import express from "express";
import morgan from "morgan";

import authRouter from "./routers/authRouter";

const app = express();
const reqLogger = morgan("common");

app.use(reqLogger);
app.use("/user", authRouter);

export default app;
