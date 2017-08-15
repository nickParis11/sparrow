var express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var app = express();
mongoose.connect('mongodb://localhost/workout', {
  useUrlClient: 'true'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, 'client')));

//CREATING THE SCHEMA

var userSchema = new Schema({
  id: String,
  partner_user_id: String,
  name: String,
  email: String,
  goal: String
});

var templateSchema = new Schema({
  id: String,
  user_id: String,
  date: String,
  name: String,
  description: String
});

var activitySchema = new Schema({
  id: String,
  user_id: String,
  workout_id: String,
  type: String,
  set_number: Number,
  repetition_number: Number,
  set_time: Number,
  rest_time: Number,
  timed: Boolean,
  name: String,
  description: String,
  date: Date
});

var historySchema = new Schema({
  id: String,
  completed: Boolean,
  user_id: String,
  workout_id: String,
  date: Date
});

//HANDLE GET REQUESTS

app.get('/users', function(req, res) {
  var users = [];
  var User = mongoose.model('User', userSchema);
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
  var Template = mongoose.model('Template', templateSchema);
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
  var Activity = mongoose.model('Activity', activitySchema);
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
  var history = mongoose.model('History', historySchema);
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
  var User = mongoose.model('User', userSchema);
  console.log(req.body);
  User.create(req.body);
  res.send('Posted User');
});

app.post('/templates', function(req, res) {
  var Template = mongoose.model('Template', templateSchema);
  console.log(req.body);
  Template.create(req.body);
  res.send('Posted Template');
});

app.post('/activities', function(req, res) {
  var Activity = mongoose.model('Activity', activitySchema);
  console.log(req.body);
  Activity.create(req.body);
  res.send('Posted Activity');
});

app.post('/histories', function(req, res) {
  var History = mongoose.model('History', historySchema);
  console.log(req.body);
  History.create(req.body);
  res.send('Posted History');
});

app.listen(3000);


