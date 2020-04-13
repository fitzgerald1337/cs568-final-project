const Car = require('../models/cars.models');
const passport = require('passport');
const jwt = require('jsonwebtoken');


exports.addCar = (req, res, next) => {
    Car.create(req.body)
        .then(response => res.json(response))
        .catch(err => console.log(err));
};

exports.getCars = (req, res, next) => {
     // Car.findById(req.params.Cid)
    Car.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
};
exports.getCar = (req, res, next) => {
    console.log(here);
    const {Cid} = req.params;
    Car.findById(Cid)
       .then(result => {
           res.send(result);
       })
       .catch(err => console.log(err));
};

exports.postSignup = async (req, res, next) => {
    res.json({
        message: 'Signup successful',
        user: req.user
    });
};

exports.postLogin =async (req, res, next) => {
        passport.authenticate('login', async (err, user, info) => {
            try {
                if (err || !user) {
                    const error = new Error('An Error occurred')
                    return next(error);
                }
                req.login(user, { session: false }, async (error) => {
                    if (error) return next(error)
                    //We don't want to store the sensitive information such as the
                    //user password in the token so we pick only the email and id
                    const body = { _id: user._id, email: user.email };
                    //Sign the JWT token and populate the payload with the user email and id
                    const token = jwt.sign({ user: body }, 'top_secret');
                    //Send back the token to the user
                    return res.json({ token });
                });
            } catch (error) {
                return next(error);
            }
        })(req, res, next);
    };

exports.getProfile = (req, res, next) => {
    //We'll just send back the user details and the token
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
    })
};

