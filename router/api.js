/**
 * Created by KyleRuan on 2017/5/31.
 */

//router for the api
var express = require('express');
var router = express.Router();

function imageFromDB() {
  // let data = QueryFromDb();
  let data = new Object();
  data.image_url = 'https://drscdn.500px.org/photo/210646819/q%3D80_h%3D450/972f2288d5428003f41de6b90cfb3a76';
  data.alt = '美女';
  data.coverURL = null;
  let user = new Object();
  user.user_id = "test123";
  user.session = "kekekekekek132131231312313";
  user.username = "kyleruan";
  data.user =  user;
  data.tags = "food";
  data.description = null;
  data.times_viewed = 23451;
  data.taken_at = 'beijing';
  let pic = new Object();
  pic.width= 500;
  pic.height = 500;
  data.pic = pic;
  return data;
}

function QueryFromDb() {
  //
}
/* GET /api/imageCollection. */
router.get('/images', function(req, res) {
  const imgurl = 'https://drscdn.500px.org/photo/210646819/q%3D80_h%3D450/972f2288d5428003f41de6b90cfb3a76';
  const imgs = [imgurl, imgurl, imgurl, imgurl];
  const imgURL = [...imgs, ...imgs, ...imgs, ...imgs];
  const  imgJson = {imgURLs:imgURL}
  const collection = imageFromDB();
  const photo = {imgURL:[collection,collection,collection]};
  res.status(200);
  res.header({'Content-Type': 'application/json'});
  res.end(JSON.stringify(photo));
});


module.exports = router;
