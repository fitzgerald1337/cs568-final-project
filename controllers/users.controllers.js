const User = require("../models/users.models");

exports.signUp = (req, res, next) => {
  User.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};
