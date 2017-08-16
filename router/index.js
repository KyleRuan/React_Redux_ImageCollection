/**
 * Created by KyleRuan on 2017/5/31.
 */
var api = require('./api');
module.exports = function (app) {

  app.get('/', function(req, res){
    if (req.session.user) {
      res.render('index', {username: req.session.username,
        msg:req.session.msg});
    } else {
      req.session.msg = 'Access denied!';
      res.redirect('/login');
    }
  });

  app.get('/login',  function(req, res){
    if(req.session.user){
      res.redirect('/');
    }
    res.render('login', {msg:req.session.msg});
  });



  app.get('/',function (req,res) {
    res.render('index');
  });

  app.use('/api',api);
}
