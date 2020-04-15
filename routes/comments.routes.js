const express = require("express");
const CommentController = require("../controllers/comment.controllers");
const route = express.Router();

route.post("/comment/:carId/:uid", CommentController.addComment);
route.get("/comment/:uid", CommentController.getCommentByUserId);
route.get("/comment", CommentController.getAllComments);


module.exports = route;