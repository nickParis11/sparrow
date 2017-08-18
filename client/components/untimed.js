angular.module('sparrow')
.controller('UnTimedCtrl', function(httpService) {

  //data is the information send when a template is added.
  this.data= {};

  this.userId = 'xyz';

  //workout contain template created by user.
  this.workout = [];

  //addWorkout() create a template of named workout
  this.addWorkout = function() {
    var obj = {};
    obj.activity = this.activity;
    obj.duration = '';
    obj.sets = this.sets;
    obj.reps = this.reps;
    this.workout.push(obj);
  };

  this.addTemplate = function() {
    this.createData();
    httpService.sendData('/api/post/workout', this.data);
    console.log('Send present workout to the database via http services',this.data);
  };

  this.createData  = function() {
    this.data.userId = this.userId;
    this.data.workout = this.workout;
    this.data.templateName = this.templateName;
    this.data.timed = false;
  };
})
.component('untimed', {
  controller: 'UnTimedCtrl',
  templateUrl: 'templates/untimed.html'
});