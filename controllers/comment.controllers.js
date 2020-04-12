const Comment = require('../models/comments.models');


exports.addComment = (req, res, next) => {
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

