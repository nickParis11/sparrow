const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
require('dotenv').config({ silent: true });
const mongoServer = process.env.MONGO_SERVER;
const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD
const mongodbURI = `mongodb://${mongoUsername}:${mongoPassword}@${mongoServer}`

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
  name: String,
  timed: Boolean,
  date: String,
});

const Template = mongoose.model('Template', templateSchema);

const historySchema = new Schema({
  id: String,
  completed: Boolean,
  user_id: String,
  workout_id: String,
  date: Date
});

const History = mongoose.model('History', historySchema);

const goalSchema = new Schema ({
  id: String,
  user_id: String,
  number: Number,
  timeFrame: String,
  creationDate: Date,
  name: String,
  emailAlert: Boolean
})

const Goal = mongoose.model('Goal', goalSchema);

module.exports = {
  User: User,
  Template: Template,
  History: History,
  Goal: Goal
}