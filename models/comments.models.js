const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  data: {
    type: String
  },
//   createdAt: {
//     type: Date
//   },
//   updatedAt : {
//       type : Date
//   }
},
{
      timestamps: true   //This will automatically add createdAt and updatedAt fields to commentSchema.
}
);

// commentSchema.pre('save', function(next){
//     now = new Date();
//     this.updatedAt = now;
//     if ( !this.createdAt){
//         this.createdAt = now;
//     }
//     next();
// })

module.exports = mongoose.model("Comment", commentSchema);

