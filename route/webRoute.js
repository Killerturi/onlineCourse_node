const express = require("express");
const { Home, About } = require("../controller/webController");

const Router = express.Router();

Router.get("/", Home);
Router.get("/about", About);

module.exports = Router;
