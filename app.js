'use strict';
let debug = require('debug')('my express app');
let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

let routes = require('./routes/index');
let company = require('./routes/company');
let custom_notifications = require('./routes/custom_notifications');
let notifications = require('./routes/notifications');
let notifications_types = require('./routes/notifications_types');
let places = require('./routes/places');
let roles = require('./routes/roles');
let room = require('./routes/room');
let sensor = require('./routes/sensor');
let settings = require('./routes/settings');
let tickets = require('./routes/tickets');
let users = require('./routes/users');
let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
app.use('/tickets', tickets);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

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
}

// production error handler
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
