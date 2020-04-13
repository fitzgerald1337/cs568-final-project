const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
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
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Comment',
  }]
});

module.exports = mongoose.model("Car", carSchema);
