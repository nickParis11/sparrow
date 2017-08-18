angular.module('sparrow')
.controller('UnTimedCtrl', function() {
  this.workout = [];
  this.addWorkout = function() {
    var obj = {};
    obj.activity = this.activity;
    obj.sets = this.sets;
    obj.reps = this.reps;
    this.workout.push(obj);
  };
})
.component('untimed', {
  controller: 'UnTimedCtrl',
  templateUrl: 'templates/untimed.html'
});