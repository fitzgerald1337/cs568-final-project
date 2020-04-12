const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: String,
});

module.exports = mongoose.model("Car", carSchema);
