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

  this.addTemplate = function() {
    console.log('Send present workout to the database via http services',this.workout);
  };
})
.component('untimed', {
  controller: 'UnTimedCtrl',
  templateUrl: 'templates/untimed.html'
});