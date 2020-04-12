const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    // id : {
    //     type: String,
    //     required: true
    // },
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