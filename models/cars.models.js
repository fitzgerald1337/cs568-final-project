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
    type: Number,
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
  comments: [
    {
      _id: { type: Schema.Types.ObjectId, ref: "User", required: true },
      contents: [
        {
          type: String,
        },
      ],
    },
    {
      timestamps: true, //This will automatically add createdAt and updatedAt fields to commentSchema.
    },
  ],
});

module.exports = mongoose.model("Car", carSchema);
