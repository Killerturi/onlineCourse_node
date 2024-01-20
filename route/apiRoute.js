const express = require("express");
const { SignUp, Login } = require("../controller/apiController");

const Router = express.Router();

Router.post("/signUp", SignUp);
Router.post("/signIn", Login);

module.exports = Router;
