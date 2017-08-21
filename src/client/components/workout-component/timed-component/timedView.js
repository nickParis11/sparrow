angular.module('sparrowFit')
.controller('timedViewCtrl', function(httpService, timerService) {
  this.timer = timerService;
  var testData = [];


  this.loadData = function () {

    for (var i = 0; i < this.workout.length; i++) {
      testData.push([this.workout[i].activity, this.workout[i].duration]);
      testData.push(['Break', this.workout[i].break]);
    }
    this.timer.clock(testData);
  };

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
