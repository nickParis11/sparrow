angular.module('sparrowFit')
.service('timerService', function () {

    this.clock = function(name, time //, next
  ) {

  var clock = new FlipClock($('.your-clock'), {
  clockFace: 'MinuteCounter',
  autoStart: false,
  countdown: true,

  callbacks: {
    start: function() {
      console.log('clock has started');
    },
    stop: function() {
      //Maybe add a next feature here
      console.log('clock has stopped');
    }
  },


  //CUSTOM CHECK VALUES (NOT KEYWORDS)
  startVal: false,
  timeSet: false
  //next: The next excercise or break

});

if (Number.isInteger(Number(time)) && Number(time) > 0) {
      clock.timeSet = true;
      clock.setTime(Number(time));
    } else {
      alert("Insert a number");
    }

$(".clockname").text(name);

//START AND STOP THE TIMER
$(".timer").click(function() {
  if (clock.timeSet) {
    if (clock.startVal) {
      $(".timer").text("Start");
      clock.stop();
      clock.startVal = false;
    } else {
      $(".timer").text("Stop");
      clock.start();
      clock.startVal = true;
    }
  }
});
};
});