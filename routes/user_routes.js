const express = require("express");
const app = express();

const {
  register,
  login,
  getUsers,
  deleteUser,
} = require("../controllers/user_controller");

const { protect } = require("../middlewares/auth_middleware");

app.post("/", register);
app.post("/login", login);
app.get("/", getUsers);
app.delete("/", deleteUser);

module.exports = app;
