var userData = require('./mockdata/exampleUsers');
var templateData = require('./mockdata/exampleTemplate');
var activityData = require('./mockdata/exampleActivity');
var historyData = require('./mockdata/exampleHistory');
var model = require('./db/mongoose-schemas')


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
