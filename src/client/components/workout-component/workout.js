angular.module('sparrowFit')
.controller('WorkoutCtrl', function WorkoutCtrl(httpService, timerService, userDataService) {
  this.timer = timerService;
  this.userData = {};
  this.workoutData = '';
  this.workout = '';
  this.user_id = 'xyz';
  this.url = '/api/get/workout/'+this.user_id;

  httpService.getData(this.url, (returnValue) => {
    this.userData = returnValue[0];
    console.log('This is getting some data:', this.userData);
    this.workoutData = userDataService.getWorkout(this.userData, 'jogging');//jogging,a
    this.workout = this.workoutData.template;
  });

})

.component('workout', {
  controller: 'WorkoutCtrl',
  templateUrl: 'client/components/workout-component/workout.html'
});
