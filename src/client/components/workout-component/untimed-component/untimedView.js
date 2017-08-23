angular.module('sparrowFit')
.controller('UnTimedViewCtrl', function(httpService) {

  this.completed = () => {
    this.sendData = {};
    this.sendData.completed = true;
    this.sendData.user_id = this.data.user_id;
    this.sendData.workout_id = this.data.workout_id;
    httpService.sendData('/api/histories', this.sendData);
  };

})
.component('untimedView', {
  bindings: {
    workout: '<',
    data:'<'
  },
  controller: 'UnTimedViewCtrl',
  templateUrl: 'client/components/workout-component/untimed-component/untimedView.html'
});
