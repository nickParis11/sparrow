var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/workout', {
  useUrlClient: 'true'
});

// Error Handling
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connection successful --------------=');
});


//CREATING THE SCHEMA

var userSchema = new Schema({
  id: String,
  partner_user_id: String,
  name: String,
  email: String,
  goal: String
});

var User = mongoose.model('User', userSchema);

var templateSchema = new Schema({
  id: String,
  user_id: String,
  date: String,
  name: String,
  description: String
});

var Template = mongoose.model('Template', templateSchema);

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

var Activity = mongoose.model('Activity', activitySchema);

var historySchema = new Schema({
  id: String,
  completed: Boolean,
  user_id: String,
  workout_id: String,
  date: Date
});

var History = mongoose.model('History', historySchema);


module.exports = {
  User: User,
  Template: Template,
  Activity: Activity,
  History: History
}
