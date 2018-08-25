var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();
const secret = 'keyboard cat';
app.use(cors({ credentials: true, origin: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

app.use('/api', apiRouter);
app.use('/', indexRouter);

module.exports = app;
