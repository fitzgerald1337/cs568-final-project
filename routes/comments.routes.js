const express = require("express");
const CommentController = require("../controllers/comment.controllers");
const route = express.Router();

route.post("/comment", CommentController.addComment);
route.get("/comment/:carId", CommentController.getAllComments);


module.exports = route;