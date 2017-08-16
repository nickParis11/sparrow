var userData = require('./exampleUsers.json');
var templateData = require('./exampleTemplate.json');
var activityData = require('./exampleActivity.json');
var historyData = require('./exampleHistory.json');
var model = require('./db/mongoose-schemas.js')


// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/workout', {
//   useMongoClient: true
// });

//CREATE THE SCHEMA AND MODELS

// var userSchema = new Schema({
//   id: String,
//   partner_user_id: String,
//   name: String,
//   email: String,
//   goal: String
// });
//
// var User = mongoose.model('User', userSchema);
//
// var templateSchema = new Schema({
//   id: String,
//   user_id: String,
//   date: String,
//   name: String,
//   description: String
// });
//
// var Template = mongoose.model('Template', templateSchema);
//
// var activitySchema = new Schema({
//   id: String,
//   user_id: String,
//   workout_id: String,
//   type: String,
//   set_number: Number,
//   repetition_number: Number,
//   set_time: Number,
//   rest_time: Number,
//   timed: Boolean,
//   name: String,
//   description: String,
//   date: Date
// });
//
// var Activity = mongoose.model('Activity', activitySchema);
//
// var historySchema = new Schema({
//   id: String,
//   completed: Boolean,
//   user_id: String,
//   workout_id: String,
//   date: Date
// });
//
// var History = mongoose.model('History', historySchema);

//MAKE SURE TABLES ARE CLEAR
model.User.remove({}, function(err) {
  if (err) console.log(err);
  console.log('User Table Cleared');
})

model.Template.remove({}, function(err) {
  if (err) console.log(err);
  console.log('Template Table Cleared');
})

model.Activity.remove({}, function(err) {
  if (err) console.log(err);
  console.log('Activity Table Cleared');
})

model.History.remove({}, function(err) {
  if (err) console.log(err);
  console.log('History Table Cleared');
})

//ADD DATA

userData.forEach(function(element) {
  model.User.create(element);
});
templateData.forEach(function(element) {
  model.Template.create(element);
});
activityData.forEach(function(element) {
  model.Activity.create(element);
});
historyData.forEach(function(element) {
  model.History.create(element);
});

// fs.readFile('exampleUsers.json', 'utf8', (err, data) => {
//   if (err) console.log(err);
//   for (var i = 0; i < data.length; i++) {
//     console.log(data[i]);
//     User.create(data[i]);
//   };
// });

/*fs.readFile('exampleTemplate.json', 'utf8', (err, data) => {
  if (err) console.log(err);
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    Template.create(data[i]);
  };
});

fs.readFile('exampleActivity.json', 'utf8', (err, data) => {
  if (err) console.log(err);
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    Activity.create(data[i]);
  };
});

fs.readFile('exampleHistory.json', 'utf8', (err, data) => {
  if (err) console.log(err);
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    History.create(data[i]);
  };
});
*/
