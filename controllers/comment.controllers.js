const Comment = require("../models/comments.models");
const User = require("../models/users.models");
const Car = require("../models/cars.models");
// const Mongoose=require('mongoose')

const passport = require("passport");
const jwt = require("jsonwebtoken");


exports.addComment = (req, res, next) => {
    const content = {content : req.body.content}
    new Comment(content).save().then((comm) => {
    
      Car.findById(req.body.carId).then((car) => {
        console.log(car);
        const index = car.comments.findIndex(commentobj => commentobj.writer == req.body.writer);
        
        if (index < 0) {
          //new comment for a specific user
          let tempCommentArray = [];
          tempCommentArray.push({ commentId: comm._id });
          car.comments.push({
            writer: req.body.writer,
            comment: tempCommentArray,
          });
          car.save(); //save product
        } else {
          //if the user already have a comment && allows to handle multiple comment
          let userComment = car.comments[index];
          userComment.comment = userComment.comment.push({commentId: comm._id});
          car.comments[index] = userComment;
          Car.updateOne(
            { _id: req.body.carId },
            { $set: { comments: car.comments } }
          )
          .then((carsaved) => res.json(carsaved))
          // .catch((err) => res.json(err));
        }
      });
      res.json(comm);
    });
  };
  
  
  exports.getAllComments = (req, res, next) => {
    Car.findById(req.params.carId).then((car) => {
     
      let arr = car.comments.map((carr) => {
        
        let cids = carr.comment.map((c) => c.commentId);
        
        return cids;
      });
      let retuArr =  [];
      arr.forEach(ar=>{
         ar.forEach(cid=>retuArr.push(cid));
      
      })
  
          Comment.find({_id: {$in: retuArr}}).then(ret=>{
           let commARR =  ret.map(comm => comm.content);
            res.json(commARR)
          }
             );
    });
  };

// exports.addComment = (req, res, next) => {
// Car.findById(req.params.carId).then((car) => {
//         // console.dir(car)
//         const index = car.comments.findIndex(obj=>obj._id == req.params.uid);

//         if(index>=0){
//             console.log(req.body.content)
//             car.comments[index].contents.push(req.body.content);
//             car.save();
//             res.json(car);
//         }
//         else {
           
//             const comment={
//                 _id:req.params.uid,contents:[req.body.content]
//             }
//             console.log(comment)
//             car.comments.push(comment)
//             car.save();
//             res.json(car)
           
//         }
//     });
// };




