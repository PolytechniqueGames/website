// Load Express.
var express = require('express');
var app = express();

// Set favicon.
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/favicon.ico'));

// Set view engine to EJS.
app.set('view engine', 'ejs');

// Set static files.
app.use(express.static('public'));

// Index page.
app.get('/', function (req, res) {
  res.render('pages/index');
});

// Contact page.
app.get('/contact', function (req, res) {
  res.render('pages/contact');
});

// Documentation page.
app.get('/documentation', function (req, res) {
  res.render('pages/documentation');
});

// Forum page.
app.get('/forum', function (req, res) {
  res.render('pages/forum');
});

// Project page.
app.get('/projets', function (req, res) {
  res.render('pages/projets');
});

// Partenaires page.
app.get('/partenaires', function (req, res) {
  res.render('pages/partenaires');
});

// About page.
app.get('/about', function (req, res) {
  res.render('pages/about');
});

// 
app.use(function(req, res, next){
    res.status(404).render('pages/404_error', {title: "Sorry, page not found"});
});

// Set server parameters.
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
