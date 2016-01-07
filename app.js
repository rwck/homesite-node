var express = require('express'),
  app = express(),
  engines = require('consolidate');
  bodyParser = require('body-parser');


app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

function errorHandler(err, req, res, next) {
  console.log(err.message);
  console.log(err.stack);
  res.status(500).render('error_template', {
    error: err
  });
}

var MongoClient = require('mongodb').MongoClient,
  assert = require('assert');


// home: mongodb://localhost:27017/homesite

// heroku: mongodb://<dbuser>:<dbpassword>@ds039155.mongolab.com:39155/heroku_vcdcg3t9

MongoClient.connect("mongodb://<dbuser>:<dbpassword>@ds039155.mongolab.com:39155/heroku_vcdcg3t9", function(err, db) {
  assert.equal(null, err, function() {
    console.log("There has been an error with the database", err.message);
  });
  console.log("Successfully connected to MongoDB");

  app.get('/:var(|home)?', function(req, res, next) {
    var links = [ "Portfolio", "Bio", "Contact" ];
    res.render('index', { links: links });
  });

  app.get('/portfolio', function(req, res, next) {
    var links = [ "Home", "Bio", "Contact" ];
    res.render('portfolio', { links: links });
  });

  var server = app.listen(3333, function() {
    var port = server.address().port;
    console.log("Express is setup and listening on %s", port);
  });
});
