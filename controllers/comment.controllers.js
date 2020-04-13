const Comment = require('../models/comments.models');
const User = require('../models/users.models');

const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.addComment = (req, res, next) => {
    // console.log('comment added!!!')
    Comment.create(req.body)
        .then(response => res.json(response))
        .catch(err => console.log(err));
};

exports.getComment = (req, res, next) => {
    Comment.findById(req.params.CommId)
        .then(response => res.json(response))
        .catch(err => console.log(err));
}

exports.getAllComments = (req, res, next) => {
    Comment.find()
        .then(response => res.json(response))
        .catch(err => console.log(err));
}

