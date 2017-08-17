const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const { User, Template, Activity, History } = require('../db/mongoose-schemas.js')
const app = express();
const logger = require('morgan');


app.set('port', (process.env.PORT || 3000));
const PORT = app.get('port');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client')));



//HANDLE GET REQUESTS

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
    histories.push(history);
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

//HANDLES SPECIFIC QUERIES

//GET USER BY USER_ID
app.get('/users/:id', function(req, res) {
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
app.get('/templates/:user', function(req, res) {
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

//GET HISTORIES BY USER_ID
app.get('/activities/:user', function(req, res) {
  var user = req.params.user;
  var activities = [];

  Activity.find({user_id: user}, function(err, activity) {
    if (err) console.log(err);
    activities.push(activity);
  })
  .then(function() {
    console.log(activities);
    res.send(activities);
  });
});

app.get('/histories/:user', function(req, res) {
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

//END HANDLE SPECIFIC QUERIES

app.listen(PORT, function() {
  console.log(`Node app is running on http://localhost:${PORT}`);
});
