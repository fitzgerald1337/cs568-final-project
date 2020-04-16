const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: String
    
  },
  {
    timestamps: true, //This will automatically add createdAt and updatedAt fields to commentSchema.
  }
);

module.exports = mongoose.model("Comment", commentSchema);
