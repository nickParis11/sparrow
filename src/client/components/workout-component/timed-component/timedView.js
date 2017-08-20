angular.module('sparrowFit')
.controller('timedViewCtrl', function(){
  this.msg = 'Timer is working';
  console.log('This is message :',this.msg);
})
.component('timedView', {
  controller: 'timedViewCtrl',
  templateUrl: 'client/components/workout-component/timed-component/timedView.html'
});
