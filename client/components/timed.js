angular.module('sparrow')
.controller('TimedCtrl', function() {
  console.log('Timed workout running');
})
.component('timed', {
  controller: 'TimedCtrl',
  templateUrl: 'templates/timed.html'
});