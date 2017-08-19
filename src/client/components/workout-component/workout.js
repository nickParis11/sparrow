angular.module('sparrowFit')
.controller('WorkoutCtrl', function WorkoutCtrl(httpService) {
  this.data = {};
  httpService.getData('/api/get/workout/xyz', (returnValue) => {
    console.log('This is getting some data:', this.data = returnValue[0]);
  });
})
.component('workout', {
  controller: 'WorkoutCtrl',
  templateUrl: 'client/components/workout-component/workout.html'
});
