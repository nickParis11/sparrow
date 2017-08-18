const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const { User, Template, Activity, History } = require('../db/mongoose-schemas.js')
const app = express();
const logger = require('morgan');
const cors = require('cors'); // allow cors headers
const jwt = require('express-jwt');
// allows you to use .env file
require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });

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


//

app.get('/users', function(req, res) {
  var users = [];
  User.find({}, function(err, user) {
    if (err) console.log(err);
    users.push(user);
  })
  .then(function() {
    console.log(users);
    res.send(users);
  });
});

app.get('/templates', function(req, res) {
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

app.get('/activities', function(req, res) {
  var activities = [];

  Activity.find({}, function(err, activity) {
    if (err) console.log(err);
    activities.push(activity);
  })
  .then(function() {
    console.log(activities);
    res.send(activities);
  });
});

app.get('/histories', function(req, res) {
  var histories = [];

  History.find({}, function(err, history) {
    if (err) console.log(err);
    Histories.push(history);
  })
  .then(function() {
    console.log(histories);
    res.send(histories);
  });
});

//HANDLE POST REQUESTS

app.post('/users', function(req, res) {
  console.log(req.body);
  User.create(req.body);
  res.send('Posted User');
});

app.post('/templates', function(req, res) {
  console.log(req.body);
  Template.create(req.body);
  res.send('Posted Template');
});

app.post('/activities', function(req, res) {
  console.log(req.body);
  Activity.create(req.body);
  res.send('Posted Activity');
});

app.post('/histories', function(req, res) {
  console.log(req.body);
  History.create(req.body);
  res.send('Posted History');
});

app.listen(PORT, function() {
  console.log(`Node app is running on http://localhost:${PORT}`);
});
