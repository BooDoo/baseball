var express     = require('express'),
    app         = express(),
    http        = require('http'),
    path        = require('path');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'www', 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(path.join(__dirname, 'www', 'public', 'favicon.ico')));
app.use(express.logger('dev')); //TODO: Toggle logging?
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'www', 'public')));

app.get('/', function(req, res) {
  res.render('base', {genWord: "FOOTBALL"});
});

app.get('/:genWord/', function(req, res) {
  res.render('base', {genWord: req.params.genWord.toUpperCase()})
})

app.get('/:genWord', function(req, res) {
  res.render('base', {genWord: req.params.genWord.toUpperCase()})
})

http.createServer(app)
.listen(app.get('port'), function(err){
  console.log('Express server listening on port ' + app.get('port'));
})
.on('error', function(err){
  console.warn('Express server can\'t listen [', err.code,'] Will still export app.');
});


exports.app = app;
