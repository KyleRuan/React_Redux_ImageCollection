/**
 * Created by KyleRuan on 2017/6/13.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var imageSchema = new Schema({
  image_url: {type: String, index: 1, required:true, unique: true},
  coverURL: {type: String, index: 1},
  description: String,
  times_viewed: Number,
  tags: [String],
  user:{
    username:String,
    userId:String
  },
  taken_at:String,
  pic: {
    width: Number,
    Height: Number
  }
}, {collection: 'image_status'});

imageSchema.methods.save = function(){

};
exports.imageSchema = imageSchema;