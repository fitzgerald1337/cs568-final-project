const Car = require('../models/cars.models');
// const Mongoose=require('mongoose')
// const User = require('../models/users.models')




exports.addCar = (req, res, next) => {
    console.log(req.body)
    Car.create(req.body)
    .then(car => res.json(car))
    .catch(err => res.json(err))
};

exports.getCars = (req, res, next) => {
    Car.find()
        .then(response => res.json(response))
        .catch(err => console.log(err));
};

exports.getCar = (req, res, next) => {
    const {Cid} = req.params;
    Car.findById(Cid)
       .then(response => res.json(response))
       .catch(err => console.log(err));
};

exports.getCarByUserId = (req, res, next) => {
    const uid=Mongoose.Types.ObjectId(req.params.userId)
      Car.find({'comments.writer' : uid})
      .then(cars => {
          res.json(cars)
      })
      .catch(err => res.json(err))
  }




