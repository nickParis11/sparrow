angular.module('sparrowFit')
.controller('timedViewCtrl', function(httpService, timerService) {
  this.timer = timerService;

   // var testData = [['Dance', 5], ['Break', 5], ['Crunches', 6], ['Break', 5], ['Planks', 4]];
  var testData = [];

  console.log('workout binding: ', this.workout);
  console.log('timedView timerd: ', this.timerd);
  // this.timer.clock(testData);
  this.get = function () {
    console.log('Hello');
    console.log("Workout: ", this.workout);
    for (var i = 0; i < this.workout.length; i++) {
      var tuple = [this.workout[i].activity, this.workout[i].duration];
      testData.push(tuple);
      testData.push(['Break', this.workout[i].break]);
    }
    console.log('Test Data: ', testData);
    this.timer.clock(testData);

  };
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
    data: '<'
  },
  controller: 'timedViewCtrl',
  templateUrl: 'client/components/workout-component/timed-component/timedView.html'
});
