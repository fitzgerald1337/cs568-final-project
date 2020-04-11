const Car = require('../models/cars.models');

exports.addCar = (req, res, next) => {
    Car.create(req.body)
        .then(response => res.json(response))
        .catch(err => console.log(err));
};

exports.getCar = (req, res, next) => {
    Car.findById(req.params.Cid)
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
}