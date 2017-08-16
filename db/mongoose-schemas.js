const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const mongodbURI = 'mongodb://sparrow:sparrow123@ds137261.mlab.com:37261/workout'

mongoose.connect(mongodbURI, { useMongoClient: true });

// Error Handling
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


//CREATING THE SCHEMA

const userSchema = new Schema({
  id: String,
  partner_user_id: String,
  name: String,
  email: String,
  goal: String
});

const User = mongoose.model('User', userSchema);

const templateSchema = new Schema({
  id: String,
  user_id: String,
  date: String,
  name: String,
  description: String
});

const Template = mongoose.model('Template', templateSchema);

const activitySchema = new Schema({
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

const Activity = mongoose.model('Activity', activitySchema);

const historySchema = new Schema({
  id: String,
  completed: Boolean,
  user_id: String,
  workout_id: String,
  date: Date
});

const History = mongoose.model('History', historySchema);


module.exports = {
  User: User,
  Template: Template,
  Activity: Activity,
  History: History
}
