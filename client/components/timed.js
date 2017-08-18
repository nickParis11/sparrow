angular.module('sparrow')
.controller('TimedCtrl', function() {
  //data is the information send when a template is added.
  this.data= {};
  this.userId = 'xyz';
  //workout contain template created by user.
  this.workout = [];
  //addWorkout() create a template of named workout
  this.addWorkout = function() {
    var obj = {};
    obj.activity = this.activity;
    obj.duration = Number(this.minutes || 0) * 60 + Number(this.seconds || 0);
    obj.sets = '';
    obj.reps = '';
    this.workout.push(obj);
  };

  //addTemplate add template to the database.
  this.sendTemplate = function() {
    this.createData();
    console.log('Send present workout to the database via http services',this.data);
  };

  this.createData  = function() {
    this.data.userId = this.userId;
    this.data.workout = this.workout;
    this.data.templateName = this.templateName;
    this.data.timed = true;
  };
})
.component('timed', {
  controller: 'TimedCtrl',
  templateUrl: 'templates/timed.html'
});