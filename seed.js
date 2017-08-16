var userData = require('./mockdata/exampleUsers');
var templateData = require('./mockdata/exampleTemplate');
var activityData = require('./mockdata/exampleActivity');
var historyData = require('./mockdata/exampleHistory');
const { User, Template, Activity, History } = require('./db/mongoose-schemas.js')


//MAKE SURE TABLES ARE CLEAR
User.remove({}, function(err) {
  if (err) console.log(err);
  console.log('User Table Cleared');
})

Template.remove({}, function(err) {
  if (err) console.log(err);
  console.log('Template Table Cleared');
})

Activity.remove({}, function(err) {
  if (err) console.log(err);
  console.log('Activity Table Cleared');
})

History.remove({}, function(err) {
  if (err) console.log(err);
  console.log('History Table Cleared');
})

//ADD DATA

userData.forEach(function(element) {
  User.create(element);
});
templateData.forEach(function(element) {
  Template.create(element);
});
activityData.forEach(function(element) {
  Activity.create(element);
});
historyData.forEach(function(element) {
  History.create(element);
});
