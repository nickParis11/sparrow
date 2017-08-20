angular.module('sparrowFit')
.controller('WorkoutCtrl', function WorkoutCtrl(httpService, timerService) {
  this.timer = timerService;
  this.userData = {};
  httpService.getData('/api/get/workout/xyz', (returnValue) => {
    console.log('This is getting some data:', this.userData = returnValue[0]);
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
