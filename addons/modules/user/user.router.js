var routes = require("express").Router();
var user = require("./user.controller");
routes.get("/user_info", user.user_info);
routes.post("/signup", user.register);
module.exports = routes;
