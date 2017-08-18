const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const { User, Template, History, Goal } = require('../db/mongoose-schemas.js')
const app = express();
const logger = require('morgan');
const cors = require('cors'); // allow cors headers
const jwt = require('express-jwt');
// allows you to use .env file
require('dotenv').config({ silent: true });

app.use(cors());

app.set('port', (process.env.PORT || 3002));
const PORT = app.get('port');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',express.static(path.join(__dirname, '../client')));

// AUTH0
app.use('/login', express.static(path.join(__dirname, '../src')));


//HANDLE GET REQUESTS
const authCheck = jwt({ secret: process.env.SECRET, audience: process.env.AUDIENCE, credentialsRequired: true });
// SET UP A PUBLIC AND PRIVATE ENDPOINT
app.get('/api/public', (req, res) => {
  console.log('hi from /api/public')
  res.json({ message: "Hello from a public endpoint!. You don't need to be authenticated to see this." })
});

// to protect this endpoint pass our middleware as second arg
// will require an auth header to be present for user to go through to this endpoint
app.get('/api/private', authCheck, (req, res) => {
  res.json({ message: "Hello from a private endpoint!. You DO need to be authenticated to see this." })
});


app.get('get/users', function(req, res) {
  var users = [];
  User.find({}, function(err, user) {
    if (err) console.log(err);
    console.log(user);
    users.push(user);
  })
  .then(function() {
    console.log(users);
    res.send(users);
  });
});

app.get('/get/templates', function(req, res) {
  var templates = [];

  Template.find({}, function(err, template) {
    if (err) console.log(err);
    templates.push(template);
  })
  .then(function() {
    console.log(templates);
    res.send(templates);
  });
});

app.get('/get/goals', function(req, res) {
  var goals = [];

  Goal.find({}, function(err, goal) {
    if (err) console.log(err);
    goals.push(goal);
  })
  .then(function() {
    console.log(goals);
    res.send(goals);
  });
});

app.get('/get/histories', function(req, res) {
  var histories = [];

  History.find({}, function(err, history) {
    if (err) console.log(err);
    histories.push(history);
  })
  .then(function() {
    console.log(histories);
    res.send(histories);
  });
});


//HANDLE POST REQUESTS

app.post('/post/users', function(req, res) {
  console.log(req.body);
  User.create(req.body);
  res.send('Posted User');
});

app.post('/post//post/templates', function(req, res) {
  console.log(req.body);
  Template.create(req.body);
  res.send('Posted Template');
});

app.post('/post/goals', function(req, res) {
  console.log(req.body);
  Goal.create(req.body);
  res.send('Posted Goal');
});

app.post('/post/histories', function(req, res) {
  console.log(req.body);
  History.create(req.body);
  res.send('Posted History');
});


//HANDLES SPECIFIC QUERIES

//GET USER BY USER_ID
app.get('/get/users/:id', function(req, res) {
  var ident = req.params.id;
  console.log(ident);
  var user = null;
  User.find({id: ident }, function(err, target) {
    if (err) console.log(err);
    user = target;
  })
  .then(function() {
    console.log('user: ', user);
    res.send(user);
  });
});

//GET TEMPLATES BY USER_ID
app.get('/get/templates/:user', function(req, res) {
  var user = req.params.user;
  var templates = [];

  Template.find({user_id: user}, function(err, template) {
    if (err) console.log(err);
    templates.push(template);
  })
  .then(function() {
    console.log(templates);
    res.send(templates);
  });
});


app.get('/get/histories/:user', function(req, res) {
  var user = req.params.user;
  var histories = [];

  History.find({user_id: user}, function(err, history) {
    if (err) console.log(err);
    histories.push(history);
  })
  .then(function() {
    console.log(histories);
    res.send(histories);
  });
});

app.get('/get/goals/:user', function(req, res) {
  var user = req.params.user;
  var goals = [];

  Goal.find({user_id: user}, function(err, goal) {
    if (err) console.log(err);
    goals.push(goal);
  })
  .then(function() {
    console.log(goals);
    res.send(goals);
  });
});

//END HANDLE SPECIFIC QUERIES

app.listen(PORT, function() {
  console.log(`Node app is running on http://localhost:${PORT}`);
});
