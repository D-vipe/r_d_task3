const express = require("express");
const jsonParser = express.json();
const userController = require("../controllers/userController.js");
const userRouter = express.Router();

userRouter.use("/create", jsonParser, userController.addUser);
userRouter.use("/auth", jsonParser, userController.authUser);
userRouter.use("/getById", jsonParser, userController.getById);
userRouter.use("/update", jsonParser, userController.update);
userRouter.use("/generateToken", jsonParser, userController.generateToken);
userRouter.use("/resetToken", jsonParser, userController.resetToken);
userRouter.use("/deleteToken", jsonParser, userController.deleteToken);
userRouter.use("/deleteById", jsonParser, userController.deleteById);
userRouter.use("/", userController.getUsers);

module.exports = userRouter;
