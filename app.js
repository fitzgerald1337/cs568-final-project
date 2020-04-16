const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const mongoose = require("mongoose");
const cors = require("cors");

const UserModel = require('./models/users.models');
const loginRoutes = require("./routes/login.routes");
const userRoute = require('./routes/cars.routes');
const commentRoute = require('./routes/comments.routes');
const app = express();




app.use(cors());
app.use(bodyParser.json());


app.use(loginRoutes);
//We plugin our jwt strategy as a middleware so only verified users can access this route
app.use('/user', passport.authenticate('jwt', { session : false }), userRoute );
app.use('/user', passport.authenticate('jwt', { session : false }), commentRoute );

require('./middleware/auth');

mongoose
  .connect("mongodb://localhost:27017/reactProject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log("Running on 3000");
    });
  })
  .catch((err) => console.error(err));
