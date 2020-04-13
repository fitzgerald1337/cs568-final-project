const express = require("express");
const CommentController = require("../controllers/comment.controllers");
const route = express.Router();

route.post("/comment", CommentController.addComment);
route.get("/comment/:CommId", CommentController.getComment);
route.get("/comment", CommentController.getAllComments);


module.exports = route;