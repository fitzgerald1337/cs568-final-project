const User = require("../models/users.models");

exports.signUp = (req, res, next) => {
  User.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};


// exports.commentByUser = (req,res,next) => {
//   // console.log(req.params.id)
//   const { id } = req.params;
//   User.findById(id).populate('comments')
//   .then(response => res.json(response))
//   .then(err => console.log(err));
// }