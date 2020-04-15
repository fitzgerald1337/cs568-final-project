const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const CarController = require("../controllers/car.controllers");
const route = express.Router();

route.post("/car", CarController.addCar);
route.get("/car/:userId", CarController.getCarByUserId);
route.get("/car/:Cid", CarController.getCar);
route.get("/car", CarController.getCars);

// route.get('/profile',CarController.getProfile);


module.exports = route;
