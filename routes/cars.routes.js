const express = require("express");
const CarController = require("../controllers/car.controllers");
const route = express.Router();

route.post("/car", CarController.addCar);
route.get("/car/:Cid", CarController.getCar);

module.exports = route;
