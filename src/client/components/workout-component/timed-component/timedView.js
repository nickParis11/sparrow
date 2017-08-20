angular.module('sparrowFit')
.controller('timedViewCtrl', function(httpService) {
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