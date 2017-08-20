angular.module('sparrowFit')
.controller('WorkoutCtrl', function WorkoutCtrl(httpService, timerService, userDataService) {
  this.timer = timerService;
  this.userData = {};
  this.workoutData = '';
  this.workout = '';
  this.user_id = 'xyz';
  this.url = '/api/get/workout/'+this.user_id;
  this.name = function () {
    console.log('This is the input Name :',this.inputName);
    this.workoutData = userDataService.getWorkout(this.userData, this.inputName);//jogging,a
    this.workout = this.workoutData.template;
    this.timed = this.workoutData.timed;
    if(this.timed===false){
      this.untimed = true;
    } else {
      this.untimed = false;
    }
    console.log('Timed value :', this.timed);
  };


  httpService.getData(this.url, (returnValue) => {
    this.userData = returnValue[0];
    console.log('This is getting some data:', this.userData);
    // this.workoutData = userDataService.getWorkout(this.userData, this.inputName);//jogging,a
    // this.workout = this.workoutData.template;
  });
})

.component('workout', {
  controller: 'WorkoutCtrl',
  templateUrl: 'client/components/workout-component/workout.html'
});


