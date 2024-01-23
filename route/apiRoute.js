const express = require("express");
const {
  SignUp,
  Login,
  AddCategory,
  allCategory,
} = require("../controller/apiController");

const Router = express.Router();

Router.post("/signUp", SignUp);
Router.post("/signIn", Login);
Router.post("/addCategory", AddCategory);
Router.get("/allCategory", allCategory);

module.exports = Router;
