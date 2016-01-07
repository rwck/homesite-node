var express = require('express'),
  app = express(),
  engines = require('consolidate'),
  bodyParser = require('body-parser');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('port', (process.env.PORT || 5000));
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

MongoClient.connect(process.env.MONGOLAB_URI || "mongodb://localhost:27017/challenge1", function(err, db) {
  assert.equal(null, err, function() {
    console.log("There has been a problem connecting to the database");
  });

  app.get('/:var(|home)?', function(req, res, next) {
    var links = ["Portfolio", "Bio", "Contact"];
    res.render('index', {
      links: links
    });
  });

  app.get('/portfolio', function(req, res, next) {
    var links = ["Home", "Bio", "Contact"];
    res.render('portfolio', {
      links: links
    });
  });

  var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log("Express is setup and listening on %s", port);
  });
});
