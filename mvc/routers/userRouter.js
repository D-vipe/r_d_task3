const express = require("express");
const jsonParser = express.json();
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.use("/create", jsonParser, userController.addUser);
userRouter.use("/auth", jsonParser, userController.authUser);
userRouter.use("/", userController.getUsers);

module.exports = userRouter;
