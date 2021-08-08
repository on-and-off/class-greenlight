// app configurations
import express from "express";
import morgan from "morgan";

import authRouter from "./routers/authRouter";

const app = express();
const reqLogger = morgan("common");

app.use(reqLogger);
app.use("/user", authRouter);
app.get("/", (req, res) => res.render("./static/index.html"));

export default app;
