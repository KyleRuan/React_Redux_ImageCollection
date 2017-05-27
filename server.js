/**
 * Created by kyle on 2016/12/2.
 */

/**
 * 主程序启动js
 */

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync(path.join(__dirname,'private.pem'), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname,'file.crt'), 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
var PORT = 8080;
var SSLPORT = 8081;

httpServer.listen(PORT, function() {
  console.log('HTTP Server is running on: http://localhost:%s', PORT);
});
httpsServer.listen(SSLPORT, function() {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
});


app.engine('.html',require('ejs').__express);
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'html');

//中间件设置
/*app.use(bodyParser.urlencoded({ extended: true }));
 扩展选项允许在解析URL编码数据与querystring库（当为false时）或qs库（当为true时）之间进行选择。
 “扩展”语法允许将丰富的对象和数组编码为URL编码格式，允许使用URL编码的类似JSON的体验。*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//将前端和后端分开开发,前端就直接会定位到当前文件夹为静态资源库
app.use(express.static(path.join(__dirname)));
app.use(express.static( __dirname+'/dist'));
app.use('/static', express.static( __dirname+'/dist'));
app.get('/',function (req,res) {
  res.render('index');
});

app.get('/api', function(req, res) {
  if(req.protocol === 'https') {
    res.status(200).send('Welcome to Safety Land!');
  }
  else {
    var imgurl = 'https://drscdn.500px.org/photo/210646819/q%3D80_h%3D450/972f2288d5428003f41de6b90cfb3a76';
    var imgs = [imgurl, imgurl, imgurl, imgurl];
    var imgURL = [...imgs, ...imgs, ...imgs, ...imgs];
    var  imgJson = {imgURLs:imgURL}
    res.status(200)
    // res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(imgJson));
  }
});