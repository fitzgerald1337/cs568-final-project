const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const CarController = require("../controllers/car.controllers");
const route = express.Router();

route.get("/car/:Cid", CarController.getCar);
route.post("/car", CarController.addCar);

route.get("/cars", CarController.getCars);
route.get('/profile',CarController.getProfile);


  

module.exports = route;
