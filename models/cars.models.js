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
    type: Number,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  listOfComments: [
    {
      userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
      comment: [{ CommentId: { type: Schema.Types.ObjectId, ref: "Comment" } }],
    },
  ],
});

module.exports = mongoose.model("Car", carSchema);
