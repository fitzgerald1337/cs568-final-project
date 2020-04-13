const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    data: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    }
  });

module.exports = mongoose.model('Comment', commentSchema);