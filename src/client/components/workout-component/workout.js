angular.module('sparrowFit')
.controller('WorkoutCtrl', function WorkoutCtrl(httpService, timerService, userDataService, store) {
  this.test = 'Hey, this is ctrl.test'
  this.timer = timerService;
  this.userData = {};
  this.workoutData = '';
  this.timedData = [];
  this.workout = '';
  this.user_id = store.get('profile')['user_id'];
  this.url = '/api/get/workout/'+this.user_id;

  this.name = function(name) {
    this.workoutData = userDataService.getWorkout(this.userData, name);//jogging,a
    this.workout = this.workoutData.template;
    this.timed = this.workoutData.timed;
    if(this.timed===false){
      this.untimed = true;
    } else {
      this.untimed = false;
    }
    console.log('Timed value :', this.timed);
    for (var i = 0; i < this.workout.length; i++) {
        var tuple = [this.workout[i].activity, this.workout[i].duration];
        this.timedData.push(tuple);
        this.timedData.push(['Break', this.workout[i].break]);
      }
    console.log('Test Data: ', this.timedData);
  };

  httpService.getData(this.url, (returnValue) => {
    console.log(1, returnValue)
    this.userData = returnValue[0];
    console.log('This is getting some data:', this.userData);
    // this.workoutData = userDataService.getWorkout(this.userData, this.inputName);//jogging,a
    // this.workout = this.workoutData.template;
    this.myTimedTemplates = this.userData
    .filter((a) => {
      return a.timed;
    })
    .map((a) => {
      console.log('a', a)
      return a.templateName;
    })
    this.myUntimedTemplates = this.userData
    .filter((b) => {
      return b.timed === false;
    })
    .map((b) => {
      return b.templateName;
    })
    // var testData = [];
    // console.log('Workout', this.workout);
    // if (this.workout) {
    //   console.log("Workout: ", this.workout);
    //   function() {
    //     for (var i = 0; i < this.workout.length; i++) {
    //     var tuple = [this.workout.activity, this.workout.duration];
    //     testData.push(tuple);
    //     testData.push(['Break', this.workout.break]);
    //   }
    //   }
    //   console.log('Test Data: ', testData);
    // }
  });

  this.getTimedTemps = function getTimedTemps() {
    console.log('hi from getTimedTemps');
    this.showTimed = this.myTimedTemplates;


  };

  this.getUntimedTemps = function getUntimedTemps() {
    console.log('hi from getUntimedTemps');
    this.showUntimed = this.myUntimedTemplates;
  };

})

.component('workout', {
  controller: 'WorkoutCtrl',
  templateUrl: 'client/components/workout-component/workout.html'
});
