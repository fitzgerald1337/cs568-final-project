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
  comments : [
      {
          writer : {
            type: Schema.Types.ObjectId, ref: "User", required: true 
          },
          comment : [{
              commentId : {
                type: Schema.Types.ObjectId, ref: "Comment", required: true 
              }
          }]
      }
  ]
});

module.exports = mongoose.model("Car", carSchema);

