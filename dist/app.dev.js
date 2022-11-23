'use strict';

var debug = require('debug')('my express app');

var express = require('express');

var path = require('path');

var favicon = require('serve-favicon');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var routes = require('./routes/index');

var company = require('./routes/company');

var custom_notifications = require('./routes/custom_notifications');

var notifications = require('./routes/notifications');

var notifications_types = require('./routes/notifications_types');

var places = require('./routes/places');

var roles = require('./routes/roles');

var room = require('./routes/room');

var sensor = require('./routes/sensor');

var settings = require('./routes/settings');

var tickets = require('./routes/tickets');

var users = require('./routes/users');

var app = express(); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);
app.use('/sensor', sensor);
app.use('/company', company);
app.use('/custom_notifications', custom_notifications);
app.use('/notifications', notifications);
app.use('/notifications_types', notifications_types);
app.use('/places', places);
app.use('/roles', roles);
app.use('/room', room);
app.use('/settings', settings);
app.use('/tickets', tickets); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}); // error handlers
// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
} // production error handler
// no stacktraces leaked to user


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
  debug('Express server listening on port ' + server.address().port);
});