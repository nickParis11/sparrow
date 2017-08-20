angular.module('sparrowFit')
.controller('UnTimedViewCtrl', function(){
  this.msg = 'Timer is working';
  console.log('This is message :',this.msg, this.data);
})
.component('untimedView', {
  bindings: {
    data: '<'
  },
  controller: 'UnTimedViewCtrl',
  templateUrl: 'client/components/workout-component/untimed-component/untimedView.html'
});