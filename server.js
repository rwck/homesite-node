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

var server = app.listen(3333, function() {
var port = server.address().port;
console.log("Express is setup and listening on %s", port);
});
});
