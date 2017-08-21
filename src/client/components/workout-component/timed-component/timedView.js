angular.module('sparrowFit')
.controller('timedViewCtrl', function(httpService, timerService) {
  this.timer = timerService;
  this.timerData = [];
  this.loadData = function () {
    for (var i = 0; i < this.workout.length; i++) {
      this.timerData.push([this.workout[i].activity, this.workout[i].duration]);
      this.timerData.push(['Break', this.workout[i].break]);
    }
    this.timer.clock(this.timerData);
    this.timerData = [];
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
