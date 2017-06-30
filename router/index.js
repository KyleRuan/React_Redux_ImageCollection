/**
 * Created by KyleRuan on 2017/5/31.
 */
var api = require('./api');
module.exports = function (app) {
  app.get('/',function (req,res) {
    res.render('index');
  });
  app.use('/api',api);
}
