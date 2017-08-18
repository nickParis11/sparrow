angular.module('sparrow')
.controller('TimedCtrl', function() {
  this.workout = [];
  //workout  contain template created by user.
  this.addWorkout = function() {
    var obj = {};
    obj.activity = this.activity;
    obj.duration = Number(this.minutes || 0) * 60 + Number(this.seconds);
    this.workout.push(obj);
  };
})
.component('timed', {
  controller: 'TimedCtrl',
  templateUrl: 'templates/timed.html'
});