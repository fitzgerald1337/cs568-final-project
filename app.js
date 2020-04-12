const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const cors = require("cors");

const carRoutes = require("./routes/cars.routes");
const userRoutes = require("./routes/users.routes");
const commentRoutes = require('./routes/comments.routes');

const app = express();

// app.use(cors());
app.use(bodyParser.json());
app.use(carRoutes);
app.use(userRoutes);
app.use(commentRoutes);

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
