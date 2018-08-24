var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();
const secret = 'keyboard cat';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require("cookie-session")({
    name: 'sessionkey',
    secret: secret,
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

var models = require("./data/models");
const Users = models.Users;

passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

app.use('/', indexRouter);
app.use('/api', apiRouter);

module.exports = app;
