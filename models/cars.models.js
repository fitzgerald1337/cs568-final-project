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
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  comments: [
    {userId : { type: Schema.Types.ObjectId, ref: "User"},
    comment : [
     { CommentId : { type: Schema.Types.ObjectId, ref: "Comment"}}
    ]
  }],
});

module.exports = mongoose.model("Car", carSchema);
