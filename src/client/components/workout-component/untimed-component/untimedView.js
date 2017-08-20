angular.module('sparrowFit')
.controller('UnTimedViewCtrl', function(){
  console.log('This is data :', this.data);
})
.component('untimedView', {
  bindings: {
    data: '<'
  },
  controller: 'UnTimedViewCtrl',
  templateUrl: 'client/components/workout-component/untimed-component/untimedView.html'
});