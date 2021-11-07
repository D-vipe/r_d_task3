const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "pug");

const userRouter = require("./routers/userRouter");
const homeRouter = require("./routers/homeRouter");

app.use(express.static(__dirname + '/css'));
app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});

app.listen(3000);
