/**
 * Created by KyleRuan on 2017/6/13.
 */

var mongoose = require('mongoose');
var Schema =  mongoose.Schema ;

var userSchema = new Schema({
  username:{type:String, unique:true},
  userId:{type:String, unique:true},
});

exports.userSchema = userSchema;