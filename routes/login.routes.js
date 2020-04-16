
const express = require("express");
const passport = require('passport');
const jwt = require('jsonwebtoken');
const userController = require("../controllers/users.controllers");
const route = express.Router();

//When the user sends a post request to this route, passport authenticates the user based on the
//middleware created previously
route.post('/signup', passport.authenticate('signup', { session : false }) ,userController.postSignup);


route.post('/login', userController.postLogin);

module.exports = route;