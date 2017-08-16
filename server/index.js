const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const model = require('../db/mongoose-schemas.js')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client')));


//HANDLE GET REQUESTS

app.get('/users', function(req, res) {
  var users = [];
  model.User.find({}, function(err, user) {
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

  model.Template.find({}, function(err, template) {
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

  model.Activity.find({}, function(err, activity) {
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

  model.History.find({}, function(err, history) {
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
  model.User.create(req.body);
  res.send('Posted User');
});

app.post('/templates', function(req, res) {
  console.log(req.body);
  model.Template.create(req.body);
  res.send('Posted Template');
});

app.post('/activities', function(req, res) {
  console.log(req.body);
  model.Activity.create(req.body);
  res.send('Posted Activity');
});

app.post('/histories', function(req, res) {
  console.log(req.body);
  model.History.create(req.body);
  res.send('Posted History');
});

app.listen(3000);
