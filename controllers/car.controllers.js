const Car = require('../models/cars.models');
const User = require('../models/users.models');

exports.addCar = (req, res, next) => {
    Car.create(req.body)
        .then(response => res.json(response))
        .catch(err => console.log(err));
};

exports.getCar = (req, res, next) => {
    Car.findById(req.params.Cid)
        .then(response => res.json(response))
        .catch(err => console.log(err));
}

exports.getAllCars = (req, res, next) => {
    Car.find()
        .then(response => res.json(response))
        .catch(err => console.log(err));
}

exports.signUp = (req, res, next) => {
    User.create(req.body)
        .then(response => res.json(response))
        .catch(err => console.log(err));
}