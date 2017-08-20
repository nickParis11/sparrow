angular.module('sparrowFit')
.controller('UnTimedViewCtrl', function(){
  console.log('This is data :', this.workout);
})
.component('untimedView', {
  bindings: {
    workout: '<'
  },
  controller: 'UnTimedViewCtrl',
  templateUrl: 'client/components/workout-component/untimed-component/untimedView.html'
});