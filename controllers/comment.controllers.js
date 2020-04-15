// const Comment = require("../models/comments.models");
const User = require("../models/users.models");
const Car = require("../models/cars.models");
const Mongoose=require('mongoose')

const passport = require("passport");
const jwt = require("jsonwebtoken");


// exports.getComment = (req, res, next) => {
//   console.log(req.params.CommId)
//   Car.findById(req.params.CommId)
//     .then((response) => res.json(response))
//     .catch((err) => console.log(err));
// };

exports.getCommentByUserId = (req, res, next) => {
  // console.log(req.params.uid)
  Car.find({'comments._id' :req.params.uid})
      .then((response) => res.json(response))
      .catch((err) => console.log(err));
  };

exports.getAllComments = (req, res, next) => {
  Comment.find()
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};

exports.addComment = (req, res, next) => {
Car.findById(req.params.carId).then((car) => {
        console.dir(car)
        const index = car.comments.findIndex(obj=>obj._id == req.params.uid);

        if(index>=0){
            console.log(req.body.content)
            car.comments[index].contents.push(req.body.content);
            car.save();
            res.json(car);
        }
        else {
           
            const comment={
                _id:req.params.uid,contents:[req.body.content]
            }
            console.log(comment)
            car.comments.push(comment)
            car.save();
            res.json(car)
           
        }
    });
};



//   console.log(req.body.carId)
//   const userIdIndex = car.listOfComments.findIndex(obj=>obj.userId == req.body.uid);

//   if(userIdIndex < 0){    //add new comment
// let commentArray = [];
//     commentArray.push({ commentId: cmt._id});
//     car.listOfComments.push({
//       userId: req.body.uid,
//       comment: commentArray
//     });
//     car.save();  //save product
//   }else{        //to have multiple comment
//     let userComment = car.listOfComments[userIdIndex];
//     userComment.comment = userComment.comment.push({ commentId: cmt._id});
//     car.listOfComments[userIdIndex] = userComment;
// console.log(prd.comments);
// prd.update({_id: req.body.pid},{ $set: { comments: prd.comments } }).then(p=>res.json(p));                  //save product

//   })
//  res.json(cmt)
// }

// exports.addCar = async (req, res, next) => {
//     console.log(req.body)
//     // console.log(req.params._id)
//     user = req.params;
//     id = user.id;
//     const {make, model, price, year} = req.body;
//     const comment = await Car.create({make, model, price, year, user:id})
//         .then(response => res.json(response))
//         .catch(err => console.log(err));

//     const userById = await User.findById(id)
//     userById.listOfComments.push(comment)
//     await userById.save();

//     return res.send(userById);
// };

// exports.userByComments = async (req, res, next) => {

//     const { id } = req.params;
//     const userByComments = await Car.findById(id).populate('user')
//     res.send(userByComments)
// }
