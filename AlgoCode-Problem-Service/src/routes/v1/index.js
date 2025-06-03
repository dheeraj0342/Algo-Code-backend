const express = require("express");

const problemRouter = require("./problems.routes");
const userRouter = require("./users.routes");

const v1Router = express.Router();

v1Router.use("/problems", problemRouter);
v1Router.use("/users", userRouter);

module.exports = v1Router;
