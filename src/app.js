const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users.routes");
const vidoesRouter = require("./routes/videos.routes");
const authRouter = require("./routes/auth.routes");
const ApiError = require("./utils/ApiError");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use((err, req, res, next) => {
  if (err) {
    res.json(new ApiError(500, "Something went wrong", err));
  }
  next();
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/videos", vidoesRouter);
// app.use("/api/v1/friends");

module.exports = app;
