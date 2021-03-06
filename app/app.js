var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var lcAPI        = require('lightcom-api');

var handlebars = require('express-handlebars');
var hbOpts     = {
  defaultLayout: 'main',
  extname: '.hbs'
};

var app = express();

//require('./mongoose-init');
//require('./lib/helpers');

app.engine('.hbs', handlebars(hbOpts));
app.set('view engine', '.hbs');
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// set up routes
app.use('/', require('./routes/index'));

lcAPI.connect('mongodb://localhost/lightcom');
app.use('/v1', lcAPI.API);
//app.use('/v1', require('./routes/api_v1'));
app.use('/manage', lcAPI.manage);
//app.use('/manage', require('./routes/manage'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err    = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
