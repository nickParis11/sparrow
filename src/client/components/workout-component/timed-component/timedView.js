angular.module('sparrowFit')
.controller('timedViewCtrl', function(httpService, timerService) {
  this.timer = timerService;
  // var array = [5,2];
  var obj = [5,2];
  var time = this.timer;
  // for(var i = 0; i < obj.length; i++) {
  //   console.log('For loop runing:',obj[i]);
  //   time.clock('Dance', obj[i]);
  // }
  //var testData = [['Dance', 5], ['Break', 5], ['Crunches', 6], ['Break', 5], ['Planks', 4]];
  // var testData = [];
  // console.log('Workout', this.workout);
  // if (this.workout) {
  //   console.log("Workout: ", this.workout);
  //   for (var i = 0; i < this.workout.length; i++) {
  //     var tuple = [this.workout.activity, this.workout.duration];
  //     testData.push(tuple);
  //     testData.push(['Break', this.workout.break]);
  //   }
  //   console.log('Test Data: ', testData);
  // }
  console.log('workout binding: ', this.workout)
  console.log('timedView timerd: ', this.timerd);
  this.timer.clock(this.timerd);


  this.msg = 'Timer is working';
  console.log('This is message :',this.msg);
  this.completed = () => {
    this.sendData = {};
    this.sendData.completed = true;
    this.sendData.user_id = this.data.user_id;
    this.sendData.workout_id = this.data.workout_id;
    httpService.sendData('/api/post/histories', this.sendData);
  };
})
.component('timedView', {
  bindings: {
    workout: '<',
    data: '<',
    test: '<',
    timerd: '<'
  },
  controller: 'timedViewCtrl',
  templateUrl: 'client/components/workout-component/timed-component/timedView.html'
});




// angular.module('sparrowFit')
// .controller('UnTimedViewCtrl', function(httpService){

//   this.completed = () => {
//     this.sendData = {};
//     this.sendData.completed = true;
//     this.sendData.user_id = this.data.user_id;
//     this.sendData.workout_id = this.data.workout_id;
//     httpService.sendData('/api/post/histories', this.sendData);
//   };
// })
// .component('untimedView', {
//   bindings: {
//     workout: '<',
//     data:'<'
//   },
//   controller: 'UnTimedViewCtrl',
//   templateUrl: 'client/components/workout-component/untimed-component/untimedView.html'
// });