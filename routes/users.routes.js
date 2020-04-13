const express = require("express");
const userController = require("../controllers/users.controllers");
const route = express.Router();



// route.post("/user", userController.signUp);
route.get("/user", userController.commentByUser)


module.exports = route;