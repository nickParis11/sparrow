angular.module('sparrow')
.controller('TimedCtrl', function() {
   //workout contain template created by user.
  this.workout = [];
  //addWorkout() create a template of named workout
  this.addWorkout = function() {
    var obj = {};
    obj.activity = this.activity;
    obj.duration = Number(this.minutes || 0) * 60 + Number(this.seconds);
    this.workout.push(obj);
  };
  //addTemplate add template to the database.
  this.addTemplate = function() {
    console.log('Send present workout to the database via http services',this.workout);
  };
})
.component('timed', {
  controller: 'TimedCtrl',
  templateUrl: 'templates/timed.html'
});