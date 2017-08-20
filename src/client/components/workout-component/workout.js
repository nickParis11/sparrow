angular.module('sparrowFit')
.controller('WorkoutCtrl', function WorkoutCtrl(httpService, timerService, userDataService) {
  this.timer = timerService;
  this.userData = {};
  this.workout ='';
  httpService.getData('/api/get/workout/xyz', (returnValue) => {
    this.userData = returnValue[0];
    console.log('This is getting some data:', this.userData);
    this.workout = userDataService.getWorkout(this.userData, 'jogging');
    console.log('This is the workout :', this.workout);
  });


  this.completed = function() {
    this.data = {};
    this.data.completed = true;
    this.data.user_id = 'xyz';
    this.data.workout_id ='1';
    console.log('Completed got clicked',this.data);
    httpService.sendData('/api/post/histories', this.data);
  };

})

.component('workout', {
  controller: 'WorkoutCtrl',
  templateUrl: 'client/components/workout-component/workout.html'
});
