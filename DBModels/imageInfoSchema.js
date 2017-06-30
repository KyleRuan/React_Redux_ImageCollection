/**
 * Created by KyleRuan on 2017/6/13.
 */
var mongoose = require('mongoose');
var Schema =  mongoose.Schema ;

var imageInfoSchema = new Schema({
  username:{type:String, unique:true},
  userId:{type:String, unique:true},
});

exports.imageInfoSchema = imageInfoSchema;