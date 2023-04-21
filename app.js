var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//passport imports and the code

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('./models/Account');
passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }))

  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var deoRouter = require('./routes/Deodorant');
var boardRouter = require('./routes/board');
var selRouter = require('./routes/selector');
var Deodrant = require('./models/deodorants');
var resourceRouter = require('./routes/resource');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


require("dotenv").config();
const connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


//
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Deodorant',deoRouter);
app.use('/board',boardRouter);
app.use('/selector',selRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function recreateDB(){
  // Delete everything
  console.log("recreateDB")
  await Deodrant.deleteMany();
  let instance1 = new Deodrant({D_Name:"AXE", D_Type:'Solid',D_Cost:10});
  instance1.save().then( () => {
    console.log('First Object is created');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });
 //Second object
  let instance2 = new Deodrant({D_Name:"Nivea", D_Type:'Gel',D_Cost:12});
  instance2.save().then( () => {
    console.log('Second Object is created');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });
  //Third Object
  let instance3 = new Deodrant({D_Name:"Fogg", D_Type:'Spray',D_Cost:12});
  instance3.save().then( () => {
    console.log('Third Object is created');
  }).catch( (e) => {
    console.log('There was an error', e.message);
  });
}
  let reseed = false;
  if (reseed) { recreateDB();}

  // passport config
// Use the existing connection
// The Account model

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
  //using the express-session
  app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());

module.exports = app;
